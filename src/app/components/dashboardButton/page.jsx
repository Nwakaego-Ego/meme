// import Link from "next/link";

// const DashboardButton = ({ text, link }) => {
//   return (
//     <Link href={link} passHref>
//       <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//         {text}
//       </a>
//     </Link>
//   );
// };

// export default DashboardButton;

import Link from "next/link";

const DashboardButton = ({ text, link }) => {
  return (
    <Link href={link} passHref>
      <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {text}
      </div>
    </Link>
  );
};

export default DashboardButton;
