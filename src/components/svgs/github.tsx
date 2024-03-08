interface GithubProps {
  className?: string
}

const Github: React.FC<GithubProps> = ({ className }) => (
  <svg
    width="30"
    height="29"
    viewBox="0 0 30 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? ""}
  >
    <path
      d="M14.9997 0.833496C13.1393 0.833496 11.2971 1.19993 9.57833 1.91187C7.85955 2.62381 6.29783 3.66732 4.98233 4.98282C2.32556 7.63958 0.833008 11.2429 0.833008 15.0002C0.833008 21.2618 4.89884 26.5743 10.523 28.4585C11.2313 28.5718 11.458 28.1327 11.458 27.7502V25.356C7.53384 26.206 6.69801 23.4577 6.69801 23.4577C6.04634 21.8143 5.12551 21.3752 5.12551 21.3752C3.83634 20.4968 5.22468 20.5252 5.22468 20.5252C6.64134 20.6243 7.39218 21.9843 7.39218 21.9843C8.62468 24.1377 10.7072 23.5002 11.5147 23.1602C11.6422 22.2393 12.0105 21.616 12.4072 21.2618C9.26218 20.9077 5.96134 19.6893 5.96134 14.2918C5.96134 12.7193 6.49968 11.4585 7.42051 10.4527C7.27884 10.0985 6.78301 8.62516 7.56218 6.71266C7.56218 6.71266 8.75218 6.33016 11.458 8.15766C12.5772 7.84599 13.7955 7.69016 14.9997 7.69016C16.2038 7.69016 17.4222 7.84599 18.5413 8.15766C21.2472 6.33016 22.4372 6.71266 22.4372 6.71266C23.2163 8.62516 22.7205 10.0985 22.5788 10.4527C23.4997 11.4585 24.038 12.7193 24.038 14.2918C24.038 19.7035 20.723 20.8935 17.5638 21.2477C18.0738 21.6868 18.5413 22.551 18.5413 23.8685V27.7502C18.5413 28.1327 18.768 28.586 19.4905 28.4585C25.1147 26.5602 29.1663 21.2618 29.1663 15.0002C29.1663 13.1398 28.7999 11.2976 28.088 9.57881C27.376 7.86003 26.3325 6.29831 25.017 4.98282C23.7015 3.66732 22.1398 2.62381 20.421 1.91187C18.7022 1.19993 16.8601 0.833496 14.9997 0.833496Z"
      fill="white"
    />
  </svg>
)

export default Github
