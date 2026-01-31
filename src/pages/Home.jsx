import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

export default function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("date", "desc"));
    return onSnapshot(q, s => setNews(s.docs.map(d => ({...d.data(), id: d.id}))));
  }, []);

  return (
    <main className="max-w-7xl mx-auto p-4 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {news.map((n, i) => (
          <div key={n.id} className={`${i === 0 ? 'md:col-span-8' : 'md:col-span-4'} border-b border-zinc-200 pb-8`}>
            {n.img && <img src={n.img} className="w-full aspect-video object-cover mb-4 hover:opacity-80 transition cursor-pointer shadow-lg" alt="news" />}
            <span className="text-red-700 font-bold uppercase text-xs tracking-widest">{n.cat}</span>
            <h2 className={`${i === 0 ? 'text-5xl' : 'text-2xl'} font-black mt-2 leading-tight uppercase`}>{n.title}</h2>
            <p className="mt-4 text-zinc-600 font-serif leading-relaxed line-clamp-3">{n.body}</p>
            {n.yt && <iframe className="mt-4 w-full aspect-video rounded" src={`https://www.youtube.com/embed/${n.yt}`} frameBorder="0" allowFullScreen></iframe>}
          </div>
        ))}
      </div>
    </main>
  );
}
