import Image from "./Image";
import Button from "./Button";

function Header() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-10 bg-[#FEFBF6] text-[#393E46]">
        <div className="w-full flex items-center justify-between py-4 px-4">
          {/* Extend <h1> further to the left */}
          <Image
            src="assets/logo.svg"
            alt=""
            height={50}
            width={50}
            className="h-8 w-8 rounded-full"
          />
          {/* Extend <a> elements further to the right */}
          <nav className="flex space-x-10 mr-0">
            <a href="#home" className="hover:text-gray-300">
              Home
            </a>
            <a href="#about" className="hover:text-gray-300">
              About
            </a>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
            <Button
              text="Sign In"
              style={{
                backgroundColor: "#3b82f6", // Blue background
                color: "white", // White text
                padding: "1px 8px", // Smaller padding for compact size
                borderRadius: "4px", // Slightly rounded corners
                fontSize: "16px", // Match font size of <a> elements
                lineHeight: "1.5", // Match line height of <a> elements
                transition: "background-color 0.3s ease", // Smooth hover effect
                cursor: "pointer", // Pointer cursor for interactivity
              }}
              className="hover:text-gray-300 text-base bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
            />
            <Button
              text="Register"
              style={{
                backgroundColor: "#3b82f6", // Blue background
                color: "white", // White text
                padding: "1px 8px", // Smaller padding for compact size
                borderRadius: "4px", // Slightly rounded corners
                fontSize: "16px", // Match font size of <a> elements
                lineHeight: "1.5", // Match line height of <a> elements
                transition: "background-color 0.3s ease", // Smooth hover effect
                cursor: "pointer", // Pointer cursor for interactivity
              }}
              className="hover:text-gray-300 text-base bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
            />
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
