import Image from "./Image";
import HoverableButton from "./HoverableButton";

function Header() {
  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = "#444444"; // Darker background on hover
    e.currentTarget.style.color = "#FFD700"; // Gold text on hover
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = "#2C2C2C"; // Reset background
    e.currentTarget.style.color = "white"; // Reset text color
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-10 bg-[#FEFBF6] text-[#2C2C2C]">
        <div className="w-full flex items-center justify-between py-4 px-4">
          {/* Extend <h1> further to the left */}
          <Image
            src="assets/logo.png"
            alt=""
            height={50}
            width={50}
            className="h-8 w-8"
          />
          {/* Extend <a> elements further to the right */}
          <nav className="flex items-center space-x-3 mr-0">
            <a href="#home" className="hover:text-gray-300 text-base leading-6">
              Home
            </a>
            <a
              href="#about"
              className="hover:text-gray-300 text-base leading-6"
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:text-gray-300 text-base leading-6"
            >
              Contact
            </a>
            <HoverableButton
            text="Sign In"
            style={{
              backgroundColor: "#2C2C2C",
              color: "white",
              padding: "4px 12px",
              borderRadius: "4px",
              fontSize: "16px",
              lineHeight: "1.5",
              transition: "background-color 0.3s ease",
              cursor: "pointer",
            }}
            className="hover:text-gray-300 text-base"
          />
          <HoverableButton
            text="Register"
            style={{
              backgroundColor: "#FEFBF6",
              color: "#2C2C2C",
              padding: "2px 10px",
              border: "2px solid #2C2C2C",
              borderRadius: "4px",
              fontSize: "16px",
              lineHeight: "1.5",
              transition: "background-color 0.3s ease",
              cursor: "pointer",
            }}
            className="hover:text-gray-300 text-base"
          />
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
