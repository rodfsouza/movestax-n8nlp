    import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
    import { ThemeProvider } from "@/components/ThemeProvider"
    import IndexPage from "@/pages/Index" // Assuming Index.tsx is in src/pages
    import { Toaster } from "@/components/ui/sonner" // Using existing Sonner component

    function App() {
      return (
        <ThemeProvider defaultTheme="system" storageKey="n8n-hosting-theme">
          <Router>
            <Routes>
              <Route path="/" element={<IndexPage />} />
              {/* Add other routes here if needed */}
            </Routes>
          </Router>
          <Toaster richColors />
        </ThemeProvider>
      )
    }
    
    export default App
