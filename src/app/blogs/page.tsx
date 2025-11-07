export default function BlogPage() {

  const a = Array.from({ length: 448 }).map((_, i) => <p key={i} className={`text-4xl ${i % 2 == 0 ? "text-blue-200 dark:text-gray-500" : i % 3 == 0 ? "text-sky-200 dark:text-slate-500" : "text-teal-100 dark:text-zinc-600"} hover:rotate-210 duration-500 hover:duration-0 hover:text-sky-600 dark:hover:text-yellow-700`}>+</p>);

  return (
    <>
      <p className="text-5xl font-bold m-r-200">play.</p>
      <div className="max-w-2xl flex flex-wrap overflow-hidden z-1 cursor-default">
        {a}
      </div>
    </>
  )
}