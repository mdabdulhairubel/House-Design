
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS, WHATSAPP_NUMBER } from '../constants';
import { BlogPost as BlogPostType } from '../types';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);

  useEffect(() => {
    const found = BLOG_POSTS.find(p => p.slug === slug);
    if (found) setPost(found);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-blue-600 underline">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <article className="bg-white min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="flex gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-blue-600">Blog</Link>
          <span>/</span>
          <span className="text-gray-900 truncate">{post.title}</span>
        </nav>

        <header className="mb-12">
          <span className="text-blue-600 text-xs font-black uppercase tracking-[0.3em] mb-4 block">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 border-y border-gray-100 py-6">
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Published</span>
              <span className="font-bold text-gray-900">{post.date}</span>
            </div>
            <div className="w-px h-8 bg-gray-100"></div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Author</span>
              <span className="font-bold text-gray-900">{post.author}</span>
            </div>
          </div>
        </header>

        <div className="mb-16 rounded-[40px] overflow-hidden shadow-2xl">
          <img src={post.image} alt={post.title} className="w-full h-auto" />
        </div>

        <div className="prose prose-blue prose-lg max-w-none prose-headings:font-black prose-headings:tracking-tight prose-p:text-gray-600 prose-p:leading-relaxed prose-strong:text-blue-900">
          {/* Rendering content - In a real app we'd use a Markdown parser like react-markdown */}
          {post.content.split('\n').map((para, i) => {
            if (para.startsWith('###')) {
              return <h3 key={i} className="text-2xl font-black mt-12 mb-6">{para.replace('### ', '')}</h3>;
            }
            if (para.startsWith('**')) {
              return <p key={i} className="font-bold text-xl my-6">{para.replaceAll('**', '')}</p>;
            }
            return <p key={i} className="mb-6">{para}</p>;
          })}
        </div>

        {/* CTA Block */}
        <div className="mt-24 bg-blue-50 p-8 md:p-12 rounded-[40px] border border-blue-100 text-center">
          <h2 className="text-3xl font-black text-blue-900 mb-4">Inspired by this design?</h2>
          <p className="text-blue-800/70 mb-8 text-lg font-medium">Get a custom house design quote for your plot in Bangladesh.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`https://wa.me/88${WHATSAPP_NUMBER}`} className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black hover:bg-blue-700 transition-all shadow-xl">
              Talk to an Architect
            </a>
            <Link to="/portfolio" className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black border border-blue-200 hover:bg-blue-50 transition-all">
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
