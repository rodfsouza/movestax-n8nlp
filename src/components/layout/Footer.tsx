    export function Footer() {
      return (
        <footer className="border-t py-8 bg-muted/50">
          <div className="container mx-auto px-4 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} N8N Hosting Inc. All rights reserved.</p>
            <p className="text-sm mt-2">
              Built with ❤️ and powerful automation.
            </p>
          </div>
        </footer>
      )
    }
