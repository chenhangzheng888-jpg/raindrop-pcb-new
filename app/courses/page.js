export default function Courses() {
  const list = [
    { id: 1, title: 'PCB零基础入门', price: '199元' },
    { id: 2, title: '高速PCB设计', price: '299元' },
    { id: 3, title: 'EMC/ESD实战', price: '399元' },
  ]

  return (
    <div className="max-w-6xl mx-auto p-4 py-10">
      <h2 className="text-2xl font-bold mb-6">课程中心</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {list.map(item => (
          <div key={item.id} className="border rounded-lg p-4">
            <h3 className="text-lg font-bold">{item.title}</h3>
            <p className="text-blue-600 font-bold mt-2">{item.price}</p>
            <a href={`/courses/${item.id}`} className="inline-block mt-3 text-sm underline">查看详情</a>
          </div>
        ))}
      </div>
    </div>
  )
}