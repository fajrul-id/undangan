import Image from "next/image";
import MaskBottom from "../../assets/mask_bottom.png";
import Bunga from "../../assets/flower.png";
import Ring from "../../assets/ring.png";
import Wedding from "../../assets/Resepsi.png";
import Timer from "../Timer";
import MaskTop from "../../assets/mask.png";
import { useState } from "react";
import { useSpring, animated } from "react-spring";
import Instagram from "../../assets/instagram.png";

export default function Waktu() {
  const [showModal, setShowModal] = useState(false);
  const [copied, setCopied] = useState({
    fajrul: false,
    tara: false,
    alamat: false,
  });
  const fade = useSpring({
    opacity: showModal ? 1 : 0,
  });

  const copyText = (e) => {
    const rekeningFajrul = 6555152608;
    const alamatRumah =
      "Jl. Bangka II F No.13RT.3/RW.13, Pela Mampang, Kec. Mampang Prpt. ,Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12720";
    if (e === "fajrul") {
      navigator.clipboard.writeText(rekeningFajrul);
      setCopied({
        ...copied,
        fajrul: true,
      });
    } else {
      navigator.clipboard.writeText(alamatRumah);
      setCopied({
        ...copied,
        alamat: true,
      });
    }
  };
  return (
    <>
      <div className={"bg-color-white bg-cover bg-bottom"}>
        <Image src={MaskBottom} />
        <div
          className={
            "flex justify-center items-center content-center md:-mt-10"
          }
        >
          <Image src={Bunga} />
        </div>
        <div className={"container flex flex-wrap mx-auto pt-5"}>
          <br />
          <div className="shadow-lg text-center md:w-5/12 md:ml-20 mb-6 px-3 py-10">
            <div className="flex justify-center">
              <Image src={Ring} width={100} height={100} />
            </div>
            <h1
              className={
                "md:text-6xl capitalize text-5xl md:mb-0 font-medium leading-relaxed font-curs"
              }
            >
              Akad Nikah
            </h1>
            <p className={"font-bold"}>Minggu. 13 Agustus 2023</p>
            <p className={"font-bold"}>08:00 - 10:00</p>
            {/* <p className={"font-bold"}>(Khusus Keluarga)</p> */}
            <a
              href="https://www.instagram.com/taraamelia131200/"
              target={"_blank"}
              rel="noreferrer"
            >
              <button className="hover:bg-color-pallete-600 text-black font-bold py-2 px-4 rounded">
                <p className={"flex"}>
                  <Image src={Instagram} width={25} height={25} />
                  &nbsp; Live Instagram
                </p>
                <p>@taraamelia131200</p>
              </button>
            </a>
            <br />
            <p className={"font-bold"}>Kediaman Bpk. Muheri</p>
            <p className={"px-16"}>
              Jl. Bangka II F No.13RT.3/RW.13, Pela Mampang, Kec. Mampang Prpt.,
              Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12720
            </p>
            <button
              className="mt-4 bg-blue-600 hover:bg-color-pallete-300 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                setShowModal(true);
                setCopied({
                  fajrul: false,
                  alamat: false,
                });
              }}
            >
              <p className={"flex"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                    clipRule="evenodd"
                  />
                  <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
                </svg>
                &nbsp; Kirim Hadiah
              </p>
            </button>
          </div>
          <div className={"md:w-1/12"}></div>
          <div className="shadow-lg text-center md:w-5/12 md:-ml-12 px-3 mb-6 py-10">
            <div className="flex justify-center">
              <Image src={Wedding} width={100} height={100} />
            </div>
            <h1
              className={
                "md:text-6xl capitalize text-5xl md:mb-0 font-medium leading-relaxed font-curs"
              }
            >
              Unduh Mantu
            </h1>
            <p className={"font-bold"}>Minggu. 17 September 2023</p>
            <p className={"font-bold"}>10:00 - Selesai</p>
            <br />
            <p className={"font-bold"}>Kediaman Bpk. Mulyadi</p>
            <p className={"px-16"}>
              Jl. Merapi 6A No.23 Rt.06 Rw.02 Kel.Panorama Kec.Singaran Pati
              Kota Bengkulu
            </p>
            <button
              className="mt-4 bg-blue-600 hover:bg-color-pallete-300 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                setShowModal(true);
                setCopied({
                  fajrul: false,
                  alamat: false,
                });
              }}
            >
              <p className={"flex"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                    clipRule="evenodd"
                  />
                  <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
                </svg>
                &nbsp; Kirim Hadiah
              </p>
            </button>
          </div>
        </div>
        <Timer />
        <div className={"text-center mb-2"}>
          <a
            href="https://goo.gl/maps/FCtxDsEfSTiigiko7"
            target="_blank"
            rel="noreferrer"
          >
            <button className="bg-color-pallete-200 hover:bg-color-pallete-300 text-white font-bold py-2 px-4 rounded mb-2 md:mb-0">
              <p className={"flex"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                &nbsp; Buka Google Maps
              </p>
            </button>
          </a>
          &nbsp;
          <button
            className="bg-color-pallete-450 hover:bg-color-pallete-300 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              setShowModal(true);
              setCopied({
                fajrul: false,
                alamat: false,
              });
            }}
          >
            <p className={"flex"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                  clipRule="evenodd"
                />
                <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
              </svg>
              &nbsp; Kirim Hadiah
            </p>
          </button>
        </div>
        {showModal ? (
          <animated.div style={fade}>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-6xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-2xl font-semibold">Kado Pernikahan</h3>
                    <button
                      className="p-2 ml-auto border-0 text-black opacity-75 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7 text-gray-900"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 w-full">
                    <div
                      className={
                        "text-center md:flex md:justify-center items-center"
                      }
                    >
                      <div className={"mb-10 md:mb-0 md:mr-3 mr-0"}>
                        <h3>
                          6555152608 - BCA
                          <br />
                          An Muhammad Fajrul Amin{" "}
                        </h3>
                        <button
                          className="bg-color-pallete-200 hover:bg-color-pallete-300 text-white font-bold py-2 px-4 rounded mb-2 md:mb-0"
                          onClick={() => {
                            copyText("fajrul");
                          }}
                        >
                          <p className={"flex"}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                              <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                            </svg>
                            &nbsp; Copy Number
                          </p>
                        </button>

                        {copied.fajrul ? (
                          <>
                            <br />
                            <br />
                            <p className={"italic"}>Copied!</p>
                          </>
                        ) : null}
                      </div>

                      <div>
                        <h3>
                          <span className={"font-bold"}>
                            Kediaman mempelai wanita : <br />
                          </span>
                          Jl. Bangka II F No.13
                          <br />
                          RT.3/RW.13, Pela Mampang,
                          <br /> Kec. Mampang Prpt., Kota Jakarta Selatan,
                          <br /> Daerah Khusus Ibukota Jakarta 12720
                        </h3>
                        <button
                          className="bg-color-pallete-200 hover:bg-color-pallete-300 text-white font-bold py-2 px-4 rounded mb-5 md:mb-0"
                          onClick={() => {
                            copyText("alamat");
                          }}
                        >
                          <p className={"flex"}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                              <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                            </svg>
                            &nbsp; Copy Address
                          </p>
                        </button>
                        {copied.alamat ? (
                          <>
                            <br />
                            <br />
                            <p className={"italic"}>Copied!</p>
                          </>
                        ) : null}
                      </div>
                      <h3>
                        <span className={"font-bold"}>
                          Setelah transfer, mohon konfirmasi ke nomor dibawah
                          ini : <br />
                        </span>
                        Fajrul : <br />
                        +62-823-9092-4636 <br />
                        Tara : <br /> +62-858-8207-0694
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </animated.div>
        ) : null}
        <div className={"mx-auto justify-center flex"}>
          <iframe
            className={"md:w-8/12 w-11/12"}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.017582024303!2d102.28927872480891!3d-3.806277843572904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e36b11988ba954d%3A0xfd7c6bed4fe6f9db!2sFajrul.Id%20Betta%20(Toko%20Ikan%20Cupang)!5e0!3m2!1sen!2sid!4v1693761785716!5m2!1sen!2sid"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className={"-mb-2"}>
          <Image src={MaskTop} />
        </div>
      </div>
    </>
  );
}
