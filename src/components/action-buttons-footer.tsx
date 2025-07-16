import { Link } from "react-router-dom";


export function ActionButtonsFooter() {
  const buttonClasses = `relative px-8 py-4 text-lg font-bold text-foreground rounded-xl overflow-hidden
                         bg-button-footer-bg border border-border-accent
                         before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-transparent before:via-transparent before:to-border-accent before:opacity-0 before:transition-opacity before:duration-300
                         hover:before:opacity-100 hover:text-text-accent transition-colors duration-300`

  return (
    <div className="flex flex-wrap justify-center gap-6 py-12 px-4">
      <Link to="#" className={buttonClasses}>
        REGISTER NOW
      </Link>
      <Link to="#" className={buttonClasses}>
        EXHIBIT NOW
      </Link>
      <Link to="#" className={buttonClasses}>
        HACKATHON
      </Link>
      <Link to="#" className={buttonClasses}>
        WORKSHOP
      </Link>
    </div>
  )
}
