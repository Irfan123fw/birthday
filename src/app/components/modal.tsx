"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
  useModal,
} from "@/components/ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";
import { redirect } from "next/navigation";





export function AnimatedModalDemo() {
  const [currentModal, setCurrentModal] = useState(1);

  const handleNextModal = () => {
    setCurrentModal((prev) => (prev < 6 ? prev + 1 : 6));
  };

  const handlePreviousModal = () => {
    setCurrentModal((prev) => (prev > 1 ? prev - 1 : 1));
  };

  async function gotowa() {
    const pesanWhatsapp = "Ike sayangg banget sama fashaaa ";
    const phoneNumber = "+6282172716552";
    const encodedMessage = encodeURIComponent(pesanWhatsapp); // Encode pesan agar aman untuk URL
  
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    setCurrentModal(1);
  
    // Buka link WhatsApp di tab baru
    window.open(whatsappUrl, "_blank");
  }
  const [buttonText, setButtonText] = useState("Enggak");
  const [buttonPosition, setButtonPosition] = useState("static"); // Awalnya statis

  const handleEnggakModal = () => {
    const texts = [
      "Harus Mau!!!",
      "Yakin?",
      "Gabisa",
      "Harus Mau!!!",
      "Harus Mau!!!",
      "Yakin?",
      "Gabisa",
      "Harus Mau!!!",
      "Harus Mau!!!",
      "Yakin?",
      "Gabisa",
      "Harus Mau!!!",
      "Harus Mau!!!",
      "Yakin?",
      "Gabisa",
      "Harus Mau!!!",
      "Harus Mau!!!",
      "Yakin?",
      "Gabisa",
      "Harus Mau!!!",
      "Harus Mau!!!",
      "Yakin?",
      "Gabisa",
      "Harus Mau!!!",
      "Harus Mau!!!",
      "Yakin?",
      "Gabisa",
      "Harus Mau!!!",
      "Harus Mau!!!",
      "Yakin?",
      "Gabisa",
      "Harus Mau!!!",
      "Harus Mau!!!",
      "Yakin?",
      "Gabisa",
      "Harus Mau!!!",
      "Harus Mau!!!",
      "Yakin?",
      "Gabisa",
      "Harus Mau!!!",
      "Harus Mau!!!",
      "Yakin?",
      "Gabisa",
      "Harus Mau!!!",
      "Harus Mau!!!",
      "Yakin?",
      "Gabisa",
      "Harus Mau!!!",
      "Harus Mau!!!",
      "Yakin?",
      "Gabisa",
      "Harus Mau!!!",
      "Harus Mau!!!",
      "Yakin?",
      "Gabisa",
      "Harus Mau!!!",
      "Harus Mau!!!",
      "Yakin?",
      "Gabisa",
      "Harus Mau!!!",
      "Harus Mau!!!",
      "Yakin?",
      "Gabisa",
      "Harus Mau!!!",
      "Harus Mau!!!",
      "Yakin?",
      "Gabisa",
      "Harus Mau!!!",
      "Harus Mau!!!",
      "Yakin?",
      "Gabisa",
      "Harus Mau!!!",
      "Harus Mau!!!",
      "Yakin?",
      "Gabisa",
      "Harus Mau!!!",
      "Harus Mau!!!",
      "Yakin?",
      "Gabisa",
      "Harus Mau!!!",
      "Harus Mau!!!",
      "Yakin?",
      "Gabisa",
      "Harus Mau!!!",
      "Harus Mau!!!",
      "Yakin?",
      "Gabisa",
      "Harus Mau!!!",
      "Harus Mau!!!",
      "Yakin?",
      "Gabisa",
      "Harus Mau!!!",
      "Harus Mau!!!",
      "Yakin?",
      "Gabisa",
      "Harus Mau!!!",
      "Harus Mau!!!",
      "Yakin?",
      "Gabisa",
      "Harus Mau!!!",
      "Harus Mau!!!",
      "Yakin?",
      "Gabisa",
      "Harus Mau!!!",
      "Harus Mau!!!",
      "Yakin?",
      "Gabisa",
      "Harus Mau!!!",
      "Harus Mau!!!",
      "Yakin?",
      "Gabisa",
      "Harus Mau!!!",
      "Harus Mau!!!",
      "Yakin?",
      "Gabisa",
      "Harus Mau!!!",
      "Harus Mau!!!",
      "Yakin?",
      "Gabisa",
      "Harus Mau!!!",
      "Harus Mau!!!",
      "Yakin?",
      "Gabisa",
      "Harus Mau!!!",
    ];
    const randomIndex = Math.floor(Math.random() * texts.length);
    const newText = texts[randomIndex];

    setButtonText(newText);
  };

  function play() {
    const linklagu = '/jamrud.mp3';
    var audio = new Audio(linklagu);
    audio.play();
  }

  return (
    <div className="py-40  flex items-center justify-center rounded-full">
      <Modal>
        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Klik Disini yaa cinta
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            ❤️
          </div>
        </ModalTrigger>
        {currentModal === 1 && (
          <ModalBody>
            <ModalContent>
              <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                Haiiiii, selamat ulang tahun sayanggg{" "}
                <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                  💙
                </span>
              </h4>

              <div className="flex justify-center items-center">
                <Image
                  src="https://i.ibb.co/4Ppd5jv/snuggles-caring-1.gif"
                  alt="images"
                  width="500"
                  height="500"
                  className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                />
              </div>
              <div className="flex justify-center items-center mt-5">
                <span className="text-neutral-700 dark:text-neutral-300 text-lg">
                  Semoga panjang umur yaaa, sehat selalu, dan dilancarkan
                  rezekinya. semoga apa yang ike inginkan cepat terkabul yaa,
                  aamiin
                </span>
              </div>
            </ModalContent>
            <ModalFooter className="gap-4">
            <button
                onClick={play}
                className="px-4 py-2 rounded-md border bg-black text-white  text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
              >
                Play Music
              </button>
              <button
                onClick={handleNextModal}
                className="px-4 py-2 rounded-md border bg-black text-white  text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
              >
                Lanjut
              </button>

            </ModalFooter>
          </ModalBody>
        )}
        {currentModal === 2 && (
          <ModalBody>
            <ModalContent>
              <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                Haiiiii, selamat ulang tahun sayanggg{" "}
                <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                  💙
                </span>
              </h4>

              <div className="flex justify-center items-center">
                <Image
                  src="https://i.ibb.co/mtWVxKH/gigit.gif"
                  alt="images"
                  width="500"
                  height="500"
                  className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                />
              </div>
              <div className="flex justify-center items-center mt-5">
                <span className="text-neutral-700 dark:text-neutral-300 text-lg">
                  Semoga dengan bertambahnya usia ike, semakin sempurna juga
                  iman ike,dan semakin rajin sholatnya
                </span>
              </div>
            </ModalContent>
            <ModalFooter className="gap-4">
              <button
                onClick={handlePreviousModal}
                className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
              >
                kembali
              </button>
              <button
                onClick={handleNextModal}
                className="px-4 py-2 rounded-md border bg-black text-white  text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
              >
                Lanjut
              </button>
            </ModalFooter>
          </ModalBody>
        )}

        {currentModal === 3 && (
          <ModalBody>
            <ModalContent>
              <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                Haiiiii, selamat ulang tahun sayanggg{" "}
                <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                  💙
                </span>
              </h4>

              <div className="flex justify-center items-center">
                <Image
                  src="https://i.ibb.co/cT3t21h/tkthao219-bubududu-2.gif"
                  alt="images"
                  width="500"
                  height="500"
                  className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                />
              </div>
              <div className="flex justify-center items-center mt-5">
                <span className="text-neutral-700 dark:text-neutral-300 text-lg">
                  Semoga selalu diberi kesahatan yaa ike dan keluarga, berbakti
                  terus sama orang tua, dan dimudahkaan segala urusan ike yaa
                </span>
              </div>
            </ModalContent>
            <ModalFooter className="gap-4">
              <button
                onClick={handlePreviousModal}
                className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
              >
                kembali
              </button>
              <button
                onClick={handleNextModal}
                className="px-4 py-2 rounded-md border bg-black text-white  text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
              >
                Lanjut
              </button>
            </ModalFooter>
          </ModalBody>
        )}
        {currentModal === 4 && (
          <ModalBody>
            <ModalContent>
              <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                Haiiiii, selamat ulang tahun sayanggg{" "}
                <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                  💙
                </span>
              </h4>

              <div className="flex justify-center items-center">
                <Image
                  src="https://i.ibb.co/cT3t21h/tkthao219-bubududu-2.gif"
                  alt="images"
                  width="500"
                  height="500"
                  className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                />
              </div>
              <div className="flex justify-center items-center mt-5">
                <span className="text-neutral-700 dark:text-neutral-300 text-lg">
                  Semoga ike makin sayang ke fasha yaaa hehehe,
                </span>
              </div>
            </ModalContent>
            <ModalFooter className="gap-4">
              <button
                onClick={handlePreviousModal}
                className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
              >
                kembali
              </button>
              <button
                onClick={handleNextModal}
                className="px-4 py-2 rounded-md border bg-black text-white  text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
              >
                Lanjut
              </button>
            </ModalFooter>
          </ModalBody>
        )}
        {currentModal === 5 && (
          <ModalBody>
            <ModalContent>
              <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                Haiiiii, selamat ulang tahun sayanggg{" "}
                <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                  💙
                </span>
              </h4>

              <div className="flex justify-center items-center">
                <Image
                  src="https://i.ibb.co/cT3t21h/tkthao219-bubududu-2.gif"
                  alt="images"
                  width="500"
                  height="500"
                  className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                />
              </div>
              <div className="flex justify-center items-center mt-5">
                <span className="text-neutral-700 dark:text-neutral-300 text-lg">
                  Maafin fasha ya syangg cintaa 😓
                </span>
              </div>
            </ModalContent>
            <ModalFooter className="gap-4">
              <button
                onClick={handleEnggakModal}
                className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
              >
                {buttonText}
              </button>
              <button
                onClick={handleNextModal}
                className="px-4 py-2 rounded-md border bg-black text-white  text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
              >
                Iya mau
              </button>
            </ModalFooter>
          </ModalBody>
        )}

        {currentModal === 6 && (
          <ModalBody>
            <ModalContent>
              <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                Haiiiii, selamat ulang tahun sayanggg{" "}
                <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                  💙
                </span>
              </h4>

              <div className="flex justify-center items-center">
                <Image
                  src="https://i.ibb.co/JyKdNBp/yeay.gif"
                  alt="images"
                  width="500"
                  height="500"
                  className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                />
              </div>
              <div className="flex justify-center items-center mt-5">
                <span className="text-neutral-700 dark:text-neutral-300 text-lg">
                  Yeayyy! Makasii ayaangggg, I love you so muchh ❤️
                </span>
              </div>
            </ModalContent>
            <ModalFooter className="gap-4">
              <button
                onClick={handlePreviousModal}
                className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
              >
                kembali
              </button>
              <button
                onClick={gotowa}
                className="px-4 py-2 rounded-md border bg-black text-white  text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md"
              >
                Selesai
              </button>
            </ModalFooter>
          </ModalBody>
        )}
      </Modal>
    </div>
  );
}
