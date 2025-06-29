import type { TableBlock } from "@/types/subcategory-page"

interface TableBlockProps {
  block: TableBlock
  className?: string
}

export function TableBlockComponent({ block, className = "" }: TableBlockProps) {
  const { title, headers, rows } = block.content

  return (
    <div className={`my-8 ${className}`} id={block.id}>
      {title && <h3 className="text-xl font-semibold mb-4">{title}</h3>}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-300 border rounded-lg">
          <thead>
            <tr className="bg-gray-50">
              {headers.map((header, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                {headers.map((header, colIndex) => (
                  <td key={colIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {row[header]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
