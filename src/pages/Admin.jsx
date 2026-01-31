import React, { useState } from 'react';
import { db, storage } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export default function Admin() {
  const [post, setPost] = useState({ title: '', cat: 'Tekno', body: '', yt: '' });
  const [file, setFile] = useState(null);
  const [load, setLoad] = useState(false);

  const sendData = async (e) => {
    e.preventDefault();
    setLoad(true);
    try {
      let imgUrl = "";
      if (file) {
        const sRef = ref(storage, `telier/${Date.now()}_${file.name}`);
        await uploadBytes(sRef, file);
        imgUrl = await getDownloadURL(sRef);
      }
      await addDoc(collection(db, "posts"), { ...post, img: imgUrl, date: serverTimestamp() });
      alert("Postingan Naik Cetak!");
      window.location.reload();
    } catch (err) { alert(err.message); }
    setLoad(false);
  };

  return (
    <div className="p-8 bg-zinc-950 min-h-screen text-white">
      <form onSubmit={sendData} className="max-w-xl mx-auto space-y-4">
        <h1 className="text-3xl font-black italic text-red-600">TELIER CMS</h1>
        <input required className="w-full p-4 bg-zinc-900 border border-zinc-800 rounded" placeholder="Judul Berita" onChange={e => setPost({...post, title: e.target.value})} />
        <select className="w-full p-4 bg-zinc-900 border border-zinc-800 rounded" onChange={e => setPost({...post, cat: e.target.value})}>
          <option>Tekno</option><option>Bisnis</option><option>Gaya Hidup</option>
        </select>
        <textarea required className="w-full p-4 bg-zinc-900 border border-zinc-800 rounded h-40" placeholder="Konten..." onChange={e => setPost({...post, body: e.target.value})} />
        <input className="w-full p-4 bg-zinc-900 border border-zinc-800 rounded" placeholder="YouTube ID (Misal: dQw4w9W)" onChange={e => setPost({...post, yt: e.target.value})} />
        <input type="file" onChange={e => setFile(e.target.files[0])} className="block w-full text-sm text-zinc-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-600 file:text-white" />
        <button className="w-full bg-red-600 py-4 font-bold rounded uppercase tracking-widest">{load ? 'PROSES...' : 'PUBLISH'}</button>
      </form>
    </div>
  );
}
