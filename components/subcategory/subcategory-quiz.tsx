"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { getCategoryStyle, type CategoryType } from "@/lib/style-guide"

interface QuizQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

interface SubcategoryQuizProps {
  category: CategoryType
  title: string
  description: string
  questions: QuizQuestion[]
}

export function SubcategoryQuiz({ category, title, description, questions }: SubcategoryQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const categoryStyle = getCategoryStyle(category)
  const question = questions[currentQuestion]

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex)
    const correct = optionIndex === question.correctAnswer
    setIsCorrect(correct)
    if (correct) {
      setScore(score + 1)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedOption(null)
      setIsCorrect(null)
    } else {
      setQuizCompleted(true)
    }
  }

  const handleRestartQuiz = () => {
    setCurrentQuestion(0)
    setSelectedOption(null)
    setIsCorrect(null)
    setScore(0)
    setQuizCompleted(false)
  }

  return (
    <div className="mt-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h2 className={cn("mb-4 text-2xl font-bold", categoryStyle.tailwindClasses.primaryText)}>{title}</h2>
        <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">{description}</p>
      </motion.div>

      <div className={cn("rounded-lg border p-6 shadow-sm", categoryStyle.tailwindClasses.primaryBorder)}>
        <AnimatePresence mode="wait">
          {!quizCompleted ? (
            <motion.div
              key="question"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6 flex justify-between">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Score: {score}</span>
              </div>

              <h3 className="mb-6 text-xl font-medium text-gray-900 dark:text-white">{question.question}</h3>

              <div className="space-y-3">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => selectedOption === null && handleOptionSelect(index)}
                    className={cn(
                      "w-full rounded-lg border p-4 text-left transition-colors",
                      selectedOption === index && isCorrect
                        ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                        : selectedOption === index && !isCorrect
                          ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                          : question.correctAnswer === index && selectedOption !== null
                            ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                            : "border-gray-200 hover:border-gray-300 dark:border-gray-700 dark:hover:border-gray-600",
                      selectedOption !== null ? "cursor-default" : "cursor-pointer",
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-800 dark:text-gray-200">{option}</span>
                      {selectedOption === index && isCorrect && <Check className="h-5 w-5 text-green-500" />}
                      {selectedOption === index && !isCorrect && <X className="h-5 w-5 text-red-500" />}
                      {question.correctAnswer === index && selectedOption !== null && selectedOption !== index && (
                        <Check className="h-5 w-5 text-green-500" />
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {selectedOption !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={cn(
                    "mt-6 rounded-lg p-4",
                    isCorrect
                      ? "bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-200"
                      : "bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-200",
                  )}
                >
                  <p className="text-sm">{question.explanation}</p>
                </motion.div>
              )}

              {selectedOption !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="mt-6 flex justify-end"
                >
                  <button
                    onClick={handleNextQuestion}
                    className={cn(
                      "rounded-lg px-6 py-2 font-medium text-white",
                      categoryStyle.tailwindClasses.primaryButton,
                    )}
                  >
                    {currentQuestion < questions.length - 1 ? "Next Question" : "See Results"}
                  </button>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Quiz Completed!</h3>
              <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                You scored {score} out of {questions.length}
              </p>
              <div className="mb-8">
                <div className="mx-auto h-4 w-full max-w-md overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                  <div
                    className={cn("h-full rounded-full", categoryStyle.tailwindClasses.accentBg)}
                    style={{ width: `${(score / questions.length) * 100}%` }}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {Math.round((score / questions.length) * 100)}% correct
                </p>
              </div>
              <button
                onClick={handleRestartQuiz}
                className={cn(
                  "rounded-lg px-6 py-2 font-medium text-white",
                  categoryStyle.tailwindClasses.primaryButton,
                )}
              >
                Restart Quiz
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
