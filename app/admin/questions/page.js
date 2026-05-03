'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function QuestionsAdmin() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [questions, setQuestions] = useState([])
  const router = useRouter()

  useEffect(() => {
    if (localStorage.getItem('isAdmin') !== 'true') {
      router.push('/login')
    }
    const saved = localStorage.getItem('questions')
    if (saved) setQuestions(JSON.parse(saved))
  }, [router])

  const handleAdd = (e) => {
    e.preventDefault()
    if (!question || !answer) return alert('请填写题目和答案')

    const newQ = { id: Date.now(), question, answer }
    const updated = [...questions, newQ]
    setQuestions(updated)
    localStorage.setItem('questions', JSON.stringify(updated))
    alert('题目添加成功！')
    setQuestion('')
    setAnswer('')
  }

  const handleDelete = (id) => {
    const updated = questions.filter(q => q.id !== id)
    setQuestions(updated)
    localStorage.setItem('questions', JSON.stringify(updated))
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6">题库管理</h1>
      <form onSubmit={handleAdd} className="bg-white p-6 rounded shadow mb-8 max-w-lg">
        <div className="mb-4">
          <label className="block mb-2">题目</label>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full border rounded p-2"
            rows={3}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">答案</label>
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full border rounded p-2"
            rows={5}
            required
          />
        </div>
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">
          添加题目
        </button>
      </form>

      <h2 className="text-xl font-semibold mb-4">所有题目</h2>
      <div className="grid gap-4">
        {questions.map(q => (
          <div key={q.id} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">{q.question}</h3>
            <p className="text-gray-600 mt-2">{q.answer}</p>
            <button
              onClick={() => handleDelete(q.id)}
              className="mt-3 text-red-500 hover:text-red-700"
            >
              删除
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}