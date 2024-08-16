import React from 'react'

const page =() => {
  return (
    <div><figure className="bg-blue-200 rounded-xl p-8 dark:bg-slate-800">
    <img className="w-24 h-24 rounded-full mx-auto" src="/image.jfif" alt="" width="384" height="512"/>
    <div className="pt-6 text-center space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “Success is no Accident. It is Hard Work, Perseverance, Learning, Studying, Sacrifice and most of all,
          love of what you are doing or learning to do.”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Maryem Razzaq
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Finance Associate, RYK
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page