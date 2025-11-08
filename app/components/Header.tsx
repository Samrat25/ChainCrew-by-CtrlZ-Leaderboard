export default function Header() {
  return (
    <header id="header">
      <div id="logo">
        <img id="logo-img" src="/logo.png" alt="CtrlZ Logo" />
        <div id="logo-txt">
          <div className="ctrlz-wrapper">
            <span className="ctrl-text">Ctrl</span>
            <span className="z-text">Z</span>
          </div>
          <span className="community-text">Community</span>
        </div>
      </div>
      <ul id="links">
        <li id="instagram">
          <a href="https://www.instagram.com/ctrlz.community/" target="_blank" rel="noopener noreferrer">
            <svg className="social" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="instagram-gradient" cx="30%" cy="107%" r="150%">
                  <stop offset="0%" stopColor="#fdf497" />
                  <stop offset="5%" stopColor="#fdf497" />
                  <stop offset="45%" stopColor="#fd5949" />
                  <stop offset="60%" stopColor="#d6249f" />
                  <stop offset="90%" stopColor="#285AEB" />
                </radialGradient>
              </defs>
              <rect width="24" height="24" rx="5" fill="url(#instagram-gradient)" />
              <path d="M12 7.5C9.51 7.5 7.5 9.51 7.5 12C7.5 14.49 9.51 16.5 12 16.5C14.49 16.5 16.5 14.49 16.5 12C16.5 9.51 14.49 7.5 12 7.5ZM12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15Z" fill="white" />
              <path d="M16.5 5H7.5C6.12 5 5 6.12 5 7.5V16.5C5 17.88 6.12 19 7.5 19H16.5C17.88 19 19 17.88 19 16.5V7.5C19 6.12 17.88 5 16.5 5ZM17.5 16.5C17.5 17.05 17.05 17.5 16.5 17.5H7.5C6.95 17.5 6.5 17.05 6.5 16.5V7.5C6.5 6.95 6.95 6.5 7.5 6.5H16.5C17.05 6.5 17.5 6.95 17.5 7.5V16.5Z" fill="white" />
              <circle cx="16.75" cy="7.25" r="0.875" fill="white" />
            </svg>
          </a>
        </li>
        <li id="x">
          <a href="https://x.com/ctrlz1234" target="_blank" rel="noopener noreferrer">
            <svg className="social" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="6" fill="#000000" />
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="#ffffff" />
            </svg>
          </a>
        </li>
        <li id="whatsapp">
          <a href="https://chat.whatsapp.com/BSXdz7ED716FVBBLQwoffE?mode=wwt" target="_blank" rel="noopener noreferrer">
            <svg className="social" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="6" fill="#25D366" />
              <path d="M12.04 6.5C8.69 6.5 5.97 9.22 5.97 12.57C5.97 13.67 6.28 14.72 6.84 15.62L6 18.5L8.95 17.67C9.81 18.17 10.79 18.45 11.84 18.45H12.04C15.39 18.45 18.11 15.73 18.11 12.38C18.11 10.77 17.48 9.26 16.35 8.13C15.22 7 13.71 6.5 12.04 6.5ZM15.5 14.59C15.35 15.03 14.64 15.43 14.26 15.48C13.95 15.52 13.56 15.53 13.13 15.39C12.87 15.3 12.54 15.18 12.12 14.99C10.48 14.3 9.42 12.66 9.33 12.54C9.24 12.42 8.64 11.63 8.64 10.81C8.64 9.99 9.08 9.59 9.24 9.42C9.4 9.25 9.59 9.21 9.71 9.21C9.83 9.21 9.95 9.21 10.06 9.21C10.18 9.21 10.34 9.16 10.5 9.54C10.66 9.92 11.05 10.74 11.09 10.82C11.13 10.9 11.16 11 11.1 11.12C11.04 11.24 11.01 11.31 10.92 11.41C10.83 11.51 10.73 11.64 10.65 11.72C10.56 11.81 10.47 11.9 10.57 12.07C10.67 12.24 11.04 12.86 11.59 13.35C12.29 13.98 12.87 14.17 13.05 14.26C13.23 14.35 13.33 14.33 13.43 14.22C13.53 14.11 13.91 13.67 14.02 13.5C14.13 13.33 14.24 13.36 14.4 13.42C14.56 13.48 15.38 13.88 15.56 13.97C15.74 14.06 15.86 14.1 15.9 14.18C15.94 14.26 15.94 14.64 15.5 14.59Z" fill="white" />
            </svg>
          </a>
        </li>
        <li id="linkedin">
          <a href="https://www.linkedin.com/company/ctrlz-community/posts/" target="_blank" rel="noopener noreferrer">
            <svg className="social" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="6" fill="#0A66C2" />
              <path d="M8.5 10H6V18H8.5V10ZM7.25 6C6.56 6 6 6.56 6 7.25C6 7.94 6.56 8.5 7.25 8.5C7.94 8.5 8.5 7.94 8.5 7.25C8.5 6.56 7.94 6 7.25 6ZM18 18H15.5V14.25C15.5 13.19 14.81 13 14.5 13C14.19 13 13.25 13.06 13.25 14.25V18H10.75V10H13.25V11.125C13.625 10.375 14.5 10 15.5 10C16.625 10 18 10.875 18 13.5V18Z" fill="white" />
            </svg>
          </a>
        </li>
      </ul>
    </header>
  )
}
