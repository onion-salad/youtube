'use client'

import { useState } from 'react';

export default function Home() {
  const [url, setUrl] = useState('');
  const [transcript, setTranscript] = useState('');
  const [rewrittenScript, setRewrittenScript] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Here you would typically call your Dify API
    // For demonstration, we're just setting a timeout
    setTimeout(() => {
      setTranscript('This is a sample transcript.');
      setRewrittenScript('This is a sample rewritten script.');
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
          YouTube Shorts Transcriber
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="url" className="block text-sm font-medium text-gray-700">
              YouTube Channel URL
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="url"
                id="url"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="https://www.youtube.com/@channel"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled={isLoading}
            >
              {isLoading ? 'Processing...' : 'Transcribe and Rewrite'}
            </button>
          </div>
        </form>

        {(transcript || rewrittenScript) && (
          <div className="mt-8 space-y-6">
            <div className="bg-white shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Transcript</h3>
                <div className="mt-2 max-w-xl text-sm text-gray-500">
                  <p>{transcript}</p>
                </div>
              </div>
            </div>
            <div className="bg-white shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Rewritten Script</h3>
                <div className="mt-2 max-w-xl text-sm text-gray-500">
                  <p>{rewrittenScript}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
