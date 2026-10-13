import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Mic } from 'lucide-react'

const SearchBar = () => {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const goSearch = (text) => {
    const q = text.trim()
    if (!q) return
    navigate(`/search?q=${encodeURIComponent(q)}`)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    goSearch(query)
  }

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className="mx-auto flex w-full max-w-[660px] items-center gap-2.5"
    >
      {/* Search bar */}
      <div className="flex h-14 min-w-0 flex-1 items-center rounded-full border border-line bg-white pl-5 pr-1.5 shadow-lg shadow-brand/10 focus-within:border-brand focus-within:ring-4 focus-within:ring-brand/15">
        <label htmlFor="home-search" className="sr-only">
          Search shops, products and services
        </label>
        <input
          id="home-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search shops, products & services…"
          autoComplete="off"
          className="min-w-0 flex-1 bg-transparent text-[15px] outline-none placeholder:text-muted"
        />
        <button
          type="submit"
          aria-label="Search"
          className="flex h-11 w-14 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand transition-colors hover:bg-brand/20"
        >
          <Search size={20} />
        </button>
        
      </div>

      {/* Mic (separate button, like YouTube) */}
      <button
        type="button"
        aria-label="Search by voice"
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line bg-white shadow-lg shadow-brand/10 transition-colors hover:border-brand/40"
      >
        <Mic size={22} />
      </button>
    </form>
  )
}

export default SearchBar
