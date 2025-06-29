"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import {
  ArrowRight,
  ArrowLeft,
  BookOpen,
  Layers,
  Settings,
  ShoppingCart,
  Zap,
  Target,
  Clock,
  Lightbulb,
  Award,
  RefreshCw,
  CheckCircle,
} from "lucide-react"

type PathOption = {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
  bgColor: string
  buttonColor: string
  hoverColor: string
  path: string
  score: number
}

const pathOptions: PathOption[] = [
  {
    id: "fundamentals",
    title: "Blueprint Fundamentals",
    description: "Master the essentials of 3D printing with our comprehensive fundamentals track.",
    icon: <BookOpen className="h-6 w-6 text-blue-600" />,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    buttonColor: "bg-blue-600",
    hoverColor: "hover:bg-blue-700",
    path: "/blueprint/fundamentals",
    score: 0,
  },
  {
    id: "design",
    title: "Design & Modeling",
    description: "Learn to create and optimize 3D models for successful printing and marketability.",
    icon: <Layers className="h-6 w-6 text-green-600" />,
    color: "text-green-600",
    bgColor: "bg-green-50",
    buttonColor: "bg-green-600",
    hoverColor: "hover:bg-green-700",
    path: "/blueprint/design-modeling",
    score: 0,
  },
  {
    id: "technical",
    title: "Technical Skills",
    description: "Develop advanced technical skills for professional-quality prints.",
    icon: <Settings className="h-6 w-6 text-orange-600" />,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    buttonColor: "bg-orange-600",
    hoverColor: "hover:bg-orange-700",
    path: "/blueprint/technical-skills",
    score: 0,
  },
  {
    id: "business",
    title: "Business & Marketing",
    description: "Transform your 3D printing skills into a profitable business.",
    icon: <ShoppingCart className="h-6 w-6 text-purple-600" />,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    buttonColor: "bg-purple-600",
    hoverColor: "hover:bg-purple-700",
    path: "/blueprint/business-and-entrepreneurship",
    score: 0,
  },
  {
    id: "advanced",
    title: "AI & Advanced Topics",
    description: "Stay ahead of the curve with insights on emerging technologies in 3D printing.",
    icon: <Zap className="h-6 w-6 text-cyan-600" />,
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
    buttonColor: "bg-cyan-600",
    hoverColor: "hover:bg-cyan-700",
    path: "/blueprint/advanced-topics",
    score: 0,
  },
]

type Question = {
  id: string
  text: string
  options: {
    text: string
    scores: Record<string, number>
  }[]
}

const questions: Question[] = [
  {
    id: "experience",
    text: "What is your experience level with 3D printing?",
    options: [
      {
        text: "Complete beginner, never used a 3D printer",
        scores: { fundamentals: 5, design: 1, technical: 0, business: 0, advanced: 0 },
      },
      {
        text: "Some basic experience, printed a few models",
        scores: { fundamentals: 3, design: 4, technical: 2, business: 1, advanced: 0 },
      },
      {
        text: "Intermediate, comfortable with printing and basic design",
        scores: { fundamentals: 1, design: 3, technical: 4, business: 3, advanced: 2 },
      },
      {
        text: "Advanced, extensive experience with various printers and techniques",
        scores: { fundamentals: 0, design: 2, technical: 3, business: 4, advanced: 5 },
      },
    ],
  },
  {
    id: "goal",
    text: "What is your primary goal with 3D printing?",
    options: [
      {
        text: "Learn the basics and print simple models",
        scores: { fundamentals: 5, design: 2, technical: 1, business: 0, advanced: 0 },
      },
      {
        text: "Design and create my own custom models",
        scores: { fundamentals: 1, design: 5, technical: 2, business: 1, advanced: 1 },
      },
      {
        text: "Master advanced printing techniques and materials",
        scores: { fundamentals: 0, design: 1, technical: 5, business: 1, advanced: 3 },
      },
      {
        text: "Start or grow a 3D printing business",
        scores: { fundamentals: 1, design: 2, technical: 2, business: 5, advanced: 1 },
      },
      {
        text: "Explore cutting-edge technologies and innovations",
        scores: { fundamentals: 0, design: 1, technical: 2, business: 1, advanced: 5 },
      },
    ],
  },
  {
    id: "time",
    text: "How much time can you commit to learning?",
    options: [
      {
        text: "Just a few hours per week",
        scores: { fundamentals: 5, design: 3, technical: 1, business: 2, advanced: 0 },
      },
      {
        text: "5-10 hours per week",
        scores: { fundamentals: 3, design: 4, technical: 4, business: 3, advanced: 2 },
      },
      {
        text: "10-20 hours per week",
        scores: { fundamentals: 2, design: 3, technical: 4, business: 4, advanced: 4 },
      },
      {
        text: "20+ hours per week, fully committed",
        scores: { fundamentals: 1, design: 3, technical: 3, business: 5, advanced: 5 },
      },
    ],
  },
  {
    id: "interest",
    text: "Which aspect of 3D printing interests you most?",
    options: [
      {
        text: "Understanding how 3D printers work",
        scores: { fundamentals: 4, design: 1, technical: 5, business: 0, advanced: 2 },
      },
      {
        text: "Creating and designing 3D models",
        scores: { fundamentals: 1, design: 5, technical: 1, business: 1, advanced: 1 },
      },
      {
        text: "Making money from 3D printing",
        scores: { fundamentals: 1, design: 2, technical: 2, business: 5, advanced: 1 },
      },
      {
        text: "Exploring new technologies and applications",
        scores: { fundamentals: 1, design: 2, technical: 3, business: 1, advanced: 5 },
      },
      {
        text: "Practical applications and problem-solving",
        scores: { fundamentals: 3, design: 3, technical: 3, business: 3, advanced: 2 },
      },
    ],
  },
  {
    id: "equipment",
    text: "What equipment do you have or plan to acquire?",
    options: [
      {
        text: "Entry-level/budget 3D printer",
        scores: { fundamentals: 5, design: 3, technical: 2, business: 2, advanced: 0 },
      },
      {
        text: "Mid-range 3D printer",
        scores: { fundamentals: 3, design: 4, technical: 4, business: 3, advanced: 2 },
      },
      {
        text: "High-end/professional 3D printer",
        scores: { fundamentals: 1, design: 3, technical: 5, business: 4, advanced: 5 },
      },
      {
        text: "Multiple printers or a print farm",
        scores: { fundamentals: 0, design: 2, technical: 4, business: 5, advanced: 4 },
      },
      {
        text: "Not sure yet / Don't have a printer",
        scores: { fundamentals: 5, design: 2, technical: 0, business: 1, advanced: 0 },
      },
    ],
  },
]

export function PathFinderTool() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [results, setResults] = useState<PathOption[]>([])
  const [showResults, setShowResults] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const totalSteps = questions.length

  const handleOptionSelect = (questionId: string, optionIndex: number) => {
    if (isAnimating) return

    setIsAnimating(true)

    const newAnswers = { ...answers, [questionId]: optionIndex }
    setAnswers(newAnswers)

    // Move to next question or show results if last question
    setTimeout(() => {
      if (step < totalSteps - 1) {
        setStep(step + 1)
      } else {
        calculateResults(newAnswers)
        setShowResults(true)
      }
      setIsAnimating(false)
    }, 400)
  }

  const calculateResults = (currentAnswers: Record<string, number>) => {
    // Reset all scores - create a deep copy of the path options with reset scores
    const pathScores = pathOptions.map((path) => ({
      ...path,
      score: 0,
    }))

    // Calculate scores based on answers
    Object.entries(currentAnswers).forEach(([questionId, optionIndex]) => {
      const question = questions.find((q) => q.id === questionId)
      if (question) {
        const selectedOption = question.options[optionIndex]

        // Add scores for each path
        Object.entries(selectedOption.scores).forEach(([pathId, score]) => {
          const pathIndex = pathScores.findIndex((p) => p.id === pathId)
          if (pathIndex !== -1) {
            pathScores[pathIndex].score += score
          }
        })
      }
    })

    // Sort paths by score (highest first)
    const sortedResults = [...pathScores].sort((a, b) => b.score - a.score)
    setResults(sortedResults)
  }

  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1)
    }
  }

  const handleReset = () => {
    setStep(0)
    setAnswers({})
    setResults([])
    setShowResults(false)
  }

  const progressPercentage = ((step + 1) / totalSteps) * 100

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 md:p-8">
        {!showResults ? (
          <>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Find Your Ideal Learning Path</h3>
              <p className="text-gray-600">
                Answer a few questions to discover which learning track is best suited for your goals and experience
                level.
              </p>

              {/* Progress bar */}
              <div className="mt-6 mb-2 flex justify-between text-sm text-gray-500">
                <span>
                  Question {step + 1} of {totalSteps}
                </span>
                <span>{Math.round(progressPercentage)}% Complete</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 transition-all duration-500 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">{questions[step].text}</h4>

                  <div className="space-y-3">
                    {questions[step].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleOptionSelect(questions[step].id, index)}
                        className={`w-full text-left p-4 rounded-lg border transition-all ${
                          answers[questions[step].id] === index
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-200 hover:border-blue-300 hover:bg-blue-50/50"
                        }`}
                      >
                        <span className="flex items-center">
                          <span
                            className={`flex-shrink-0 w-6 h-6 rounded-full mr-3 flex items-center justify-center ${
                              answers[questions[step].id] === index ? "bg-blue-500 text-white" : "bg-gray-100"
                            }`}
                          >
                            {answers[questions[step].id] === index ? (
                              <CheckCircle className="w-4 h-4" />
                            ) : (
                              <span className="text-sm">{index + 1}</span>
                            )}
                          </span>
                          <span className="text-gray-800">{option.text}</span>
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-between mt-8">
              <button
                onClick={handlePrevious}
                disabled={step === 0}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  step === 0 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <ArrowLeft size={16} />
                Previous
              </button>

              <div className="text-sm text-gray-500 flex items-center">
                {step + 1} of {totalSteps}
              </div>
            </div>
          </>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Recommended Learning Path</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Based on your answers, we've identified the best learning tracks for your goals and experience level.
              </p>
            </div>

            <div className="space-y-4">
              {results.slice(0, 3).map((path, index) => (
                <motion.div
                  key={path.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className={`p-5 rounded-xl border ${index === 0 ? "border-2" : "border"} ${path.bgColor}`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-full ${path.bgColor} flex items-center justify-center`}
                    >
                      {index === 0 && (
                        <div className="absolute -top-2 -right-2 bg-yellow-400 text-xs font-bold text-gray-900 rounded-full w-6 h-6 flex items-center justify-center">
                          #1
                        </div>
                      )}
                      {path.icon}
                    </div>

                    <div className="flex-grow">
                      <div className="flex justify-between items-start">
                        <h4 className={`text-lg font-bold ${index === 0 ? path.color : "text-gray-900"}`}>
                          {path.title}
                        </h4>
                        <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded text-xs font-medium text-gray-700">
                          <span>Match:</span>
                          <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${path.buttonColor}`}
                              style={{ width: `${(path.score / 25) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm mt-1">{path.description}</p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {index === 0 && (
                          <div className="flex items-center gap-1 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                            <Award size={12} />
                            <span>Best Match</span>
                          </div>
                        )}

                        {index === 0 && path.id === "fundamentals" && (
                          <div className="flex items-center gap-1 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                            <Target size={12} />
                            <span>Beginner Friendly</span>
                          </div>
                        )}

                        {index === 0 && path.id === "business" && (
                          <div className="flex items-center gap-1 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                            <ShoppingCart size={12} />
                            <span>Profit Potential</span>
                          </div>
                        )}

                        {index === 0 && path.id === "advanced" && (
                          <div className="flex items-center gap-1 text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                            <Zap size={12} />
                            <span>Cutting Edge</span>
                          </div>
                        )}

                        {index === 0 && path.id === "technical" && (
                          <div className="flex items-center gap-1 text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full">
                            <Settings size={12} />
                            <span>Hands-On</span>
                          </div>
                        )}

                        {index === 0 && path.id === "design" && (
                          <div className="flex items-center gap-1 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                            <Layers size={12} />
                            <span>Creative</span>
                          </div>
                        )}

                        <div className="flex items-center gap-1 text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                          <Clock size={12} />
                          <span>
                            {path.id === "fundamentals" && "2-4 weeks"}
                            {path.id === "design" && "4-6 weeks"}
                            {path.id === "technical" && "6-8 weeks"}
                            {path.id === "business" && "8-10 weeks"}
                            {path.id === "advanced" && "10-12 weeks"}
                          </span>
                        </div>

                        <div className="flex items-center gap-1 text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                          <Lightbulb size={12} />
                          <span>
                            {path.id === "fundamentals" && "Beginner"}
                            {path.id === "design" && "Beginner-Intermediate"}
                            {path.id === "technical" && "Intermediate"}
                            {path.id === "business" && "Intermediate"}
                            {path.id === "advanced" && "Advanced"}
                          </span>
                        </div>
                      </div>

                      <div className="mt-4">
                        <Link
                          href={path.path}
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-gray-50 font-medium ${path.buttonColor} ${path.hoverColor} transition-colors`}
                        >
                          Start This Path
                          <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 transition-colors"
              >
                <RefreshCw size={16} />
                Retake Quiz
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
