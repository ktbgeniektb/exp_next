import Image from "next/image";
import styles from "@/styles/style.module.scss"

export default function Custom404() {
  return (
    <>
        <Image
          src="/img/404.png" //配置した画像のパスを記述する。
          alt="Top Image"
          layout="fill"
          objectFit="cover"
        />
        <div style={{
          position: "absolute",
          top: "80%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#fff",
          textAlign: "center"
        }}>
        <h2 style={{
          fontWeight: "bold",
          fontSize: "30px",
          color: "#fde047",
          textAlign: "center" 
        }}>お探しのページは見つかりませんでした。</h2>
        </div>
    </>
  )
}
