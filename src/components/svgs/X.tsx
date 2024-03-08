interface XProps {
  className?: string
}

const X: React.FC<XProps> = ({ className }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? ""}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.5859 19.375L12.0885 8.44715L12.1013 8.45739L18.8613 0.625H16.6023L11.0954 7L6.72227 0.625H0.797664L7.79723 10.8276L7.79638 10.8267L0.414062 19.375H2.67309L8.79548 12.2824L13.6613 19.375H19.5859ZM5.82719 2.32954L16.3466 17.6705H14.5564L4.02852 2.32954H5.82719Z"
      fill="white"
    />
  </svg>
)

export default X
