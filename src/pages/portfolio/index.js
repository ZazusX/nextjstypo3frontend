import Head from "next/head";
import Image from "next/image";
import bedroom01 from "../../assets/images/bedroom/big/img001.jpg";
import bedroom02 from "../../assets/images/bedroom/big/img002.jpg";
import bedroom03 from "../../assets/images/bedroom/big/img003.jpg";
import bedroom04 from "../../assets/images/bedroom/big/img004.jpg";
import bedroom05 from "../../assets/images/bedroom/big/img005.jpg";
import bedroom06 from "../../assets/images/bedroom/big/img006.jpg";

export default function Page() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <div>
        <h1>Portfolio</h1>
      </div>
      <div className="columns-3 space-y-5">
        <Image src={bedroom01} alt="" placeholder="blur" className="" />
        <Image src={bedroom02} alt="" placeholder="blur" className="" />
        <Image src={bedroom03} alt="" placeholder="blur" className="" />
        <Image src={bedroom04} alt="" placeholder="blur" className="" />
        <Image src={bedroom05} alt="" placeholder="blur" className="" />
        <Image src={bedroom06} alt="" placeholder="blur" className="" />
      </div>
    </>
  );
}
