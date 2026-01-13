import { motion } from 'framer-motion';
import { Github, Star, GitFork, ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
}

const languageColors: Record<string, string> = {
  TypeScript: 'hsl(200, 100%, 55%)',
  JavaScript: 'hsl(45, 100%, 55%)',
  Python: 'hsl(210, 65%, 55%)',
  HTML: 'hsl(15, 80%, 55%)',
  CSS: 'hsl(260, 60%, 60%)',
  Rust: 'hsl(25, 80%, 55%)',
  Go: 'hsl(190, 60%, 55%)',
  default: 'hsl(230, 15%, 55%)',
};

export default function GitHubProjects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(
          'https://api.github.com/users/rajshah9305/repos?sort=updated&per_page=6'
        );
        
        if (!response.ok) throw new Error('Failed to fetch repos');
        
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError('Unable to load GitHub projects');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    
    fetchRepos();
  }, []);

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="card-glass rounded-xl p-6 animate-pulse"
          >
            <div className="h-5 w-3/4 bg-muted/30 rounded mb-3" />
            <div className="h-4 w-full bg-muted/20 rounded mb-2" />
            <div className="h-4 w-2/3 bg-muted/20 rounded mb-4" />
            <div className="flex gap-2">
              <div className="h-6 w-16 bg-muted/20 rounded" />
              <div className="h-6 w-12 bg-muted/20 rounded" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error || repos.length === 0) {
    return (
      <div className="text-center py-12">
        <Github className="w-12 h-12 mx-auto text-muted-foreground/50 mb-4" />
        <p className="text-muted-foreground">{error || 'No repositories found'}</p>
        <a
          href="https://github.com/rajshah9305"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 text-sm text-rajai-accent hover:underline"
        >
          View on GitHub <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {repos.map((repo, i) => (
        <motion.a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="card-glass rounded-xl p-5 md:p-6 group cursor-pointer relative overflow-hidden"
          whileHover={{ y: -6 }}
        >
          {/* Hover gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-rajai-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <Github className="w-4 h-4 text-muted-foreground" />
                <h3 className="font-mono text-sm font-medium text-foreground group-hover:text-rajai-accent transition-colors truncate max-w-[200px]">
                  {repo.name}
                </h3>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-rajai-accent transition-colors flex-shrink-0" />
            </div>
            
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2 min-h-[40px]">
              {repo.description || 'No description available'}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                {repo.language && (
                  <span className="flex items-center gap-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{
                        backgroundColor: languageColors[repo.language] || languageColors.default,
                      }}
                    />
                    {repo.language}
                  </span>
                )}
                
                {repo.stargazers_count > 0 && (
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5" />
                    {repo.stargazers_count}
                  </span>
                )}
                
                {repo.forks_count > 0 && (
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5" />
                    {repo.forks_count}
                  </span>
                )}
              </div>
            </div>
            
            {repo.topics && repo.topics.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-3">
                {repo.topics.slice(0, 3).map((topic) => (
                  <span
                    key={topic}
                    className="px-2 py-0.5 text-xs font-mono bg-rajai-surface rounded text-muted-foreground border border-border/50"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.a>
      ))}
    </div>
  );
}
