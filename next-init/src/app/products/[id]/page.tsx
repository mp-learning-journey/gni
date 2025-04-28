"use client";
import {useParams} from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import globSvg from "@/public/globe.svg";

export default function AboutPage() {
    const {id} = useParams();

  return (
    <>
      <h1>Product {id} page</h1>
        <Image src={globSvg} alt={"glob"} />
        <Link href={"/contact"}>Contact us</Link>
    </>
  );
}
