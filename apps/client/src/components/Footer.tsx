import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-16 flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-0 bg-gray-800 p-8 rounded-lg">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="TrendLama" width={36} height={36} />
          <p className="hidden md:block text-md font-medium tracking-wider text-white">
            វើតស្ទរ.
          </p>
        </Link>
        <p className="text-sm text-gray-400">២០២៥ វើតស្ទរ.</p>
        <p className="text-sm text-gray-400">សូមរក្សាសិទ្ធគ្រប់យ៉ាង.</p>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">តំណភ្ជាប់</p>
        <Link href="/">ទំព័រដើម</Link>
        <Link href="/">ទំនាក់ទំនង</Link>
        <Link href="/">លក្ខខណ្ឌសេវាកម្ម</Link>
        <Link href="/">គោលការណ៍ភាពឯកជន</Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">តំណភ្ជាប់</p>
        <Link href="/">ផលិតផលទាំងអស់</Link>
        <Link href="/">ផលិតផលថ្មី</Link>
        <Link href="/">លក់ដាច់ល្អបំផុត</Link>
        <Link href="/">លក់ពិសេស</Link>
      </div>
      <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">តំណភ្ជាប់</p>
        <Link href="/">អំពីពួកយើង</Link>
        <Link href="/">ទំនាក់ទំនង</Link>
        <Link href="/">ប្លុក</Link>
        <Link href="/">កម្មវិធីភ្នាក់ងាររួម</Link>
      </div>
    </div>
  );
};

export default Footer;
