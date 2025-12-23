"use client";
import Image from "next/image";
import { CreditCard, Banknote, Wallet, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import locationLottie from "../../public/images/location.json";

export default function Home() {
  const phoneNumber = "010-5877-4440";
  const telLink = `tel:${phoneNumber}`;

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[85vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/image.png"
            alt="프리미엄 출장 마사지 서비스"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>

        {/* Content overlay */}
        <div className="relative z-10 flex min-h-[85vh] flex-col justify-between px-4 py-8 sm:px-6 sm:py-12">
          {/* Title and Phone */}
          <div className="mx-auto w-full max-w-7xl">
            <div className="flex flex-col items-center justify-start gap-4 sm:flex-row sm:items-start">
              <div className="flex h-25 w-110 items-center justify-center">
                <Image
                  src="/images/title2.svg"
                  alt="logo"
                  width={500}
                  height={500}
                  className="object-full"
                />
              </div>
              {/* <h1
                className="text-center text-5xl font-light tracking-wider text-white drop-shadow-2xl sm:text-left sm:text-6xl lg:text-7xl"
                style={{ letterSpacing: "0.05em" }}
              >
                출장 마사지
              </h1> */}
              {/* <a
                href={telLink}
                aria-label={`전화하기 ${phoneNumber}`}
                className="group hover:shadow-3xl flex items-center gap-2 rounded-full bg-[var(--massage-coral-200)] px-6 py-3 text-lg font-semibold text-white shadow-2xl transition-all duration-300 hover:bg-[var(--massage-coral-300)] sm:px-8 sm:py-4 sm:text-xl"
              >
                <Phone className="h-5 w-5 transition-transform group-hover:rotate-12 sm:h-6 sm:w-6" />
                <span>{phoneNumber}</span>
              </a> */}
            </div>
          </div>

          {/* Center Text on Image */}
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-NanumGothic mb-6 text-4xl font-semibold tracking-wide text-white drop-shadow-2xl sm:text-5xl lg:text-6xl">
              코스 문의는 편하게 전화 주세요
            </h2>
            <p className="font-NanumGothic font-base mb-10 text-xl text-white/90 drop-shadow-xl sm:text-2xl lg:text-3xl">
              고객님께 최상의 힐링 경험을 선사해드립니다
            </p>
            <a href={telLink} aria-label={`전화 문의 ${phoneNumber}`}>
              <Button
                size="lg"
                className="hover:shadow-3xl group h-auto animate-pulse bg-gradient-to-r from-[#eb5459] to-orange-200 px-10 py-6 text-2xl font-bold text-white shadow-2xl transition-all duration-300 hover:animate-none hover:bg-[var(--massage-coral-300)] sm:px-16 sm:py-8 sm:text-3xl"
              >
                {phoneNumber}
              </Button>
            </a>
          </div>

          {/* Spacer */}
          <div />
        </div>
      </section>

      {/* Service Area Section */}
      <section className="bg-gradient-to-b from-[var(--massage-beige-200)] via-[var(--massage-beige-300)] to-[var(--massage-coral-100)] px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-NanumGothic mb-12 text-center text-3xl tracking-wide sm:text-4xl">
            서비스 지역
          </h2>
          <div className="rounded-3xl bg-gradient-to-br from-[var(--massage-coral-200)] to-[var(--massage-beige-300)] p-8 shadow-2xl sm:p-12">
            <div className="flex flex-col items-center gap-6 sm:gap-8">
              <div className="rounded-full bg-white/90 p-3 shadow-lg backdrop-blur-sm">
                {/* <MapPin className="h-12 w-12 text-[var(--massage-coral-300)] sm:h-16 sm:w-16" /> */}
                <Lottie
                  animationData={locationLottie}
                  loop={true}
                  className="h-22 w-22 sm:h-24 sm:w-24"
                />
              </div>
              <div className="text-center">
                <p className="mb-4 text-2xl font-bold text-white drop-shadow-lg sm:text-3xl lg:text-4xl">
                  부산 · 김해 · 기장 · 양산
                </p>
                <p className="text-xl font-semibold text-white/90 drop-shadow-md sm:text-2xl">
                  전지역
                </p>
              </div>
              <div className="flex items-center gap-3 rounded-full bg-white/90 px-8 py-4 shadow-md backdrop-blur-sm">
                {/* <Clock className="h-7 w-7 text-[var(--massage-coral-300)] sm:h-8 sm:w-8" /> */}
                <Clock className="h-7 w-7 text-[var(--massage-coral-300)] sm:h-8 sm:w-8" />
                <span className="text-xl font-bold text-[var(--massage-brown-900)] sm:text-2xl">
                  30분 이내 방문
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section with Background Image */}
      <section className="relative min-h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/image2.png"
            alt="프리미엄 힐링 마사지"
            fill
            className="object-cover"
            sizes="100vw"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        </div>

        {/* Content overlay */}
        <div className="relative z-10 flex min-h-[70vh] flex-col justify-center px-4 py-20 sm:px-6 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-NanumGothic mb-6 text-3xl tracking-wide text-white drop-shadow-2xl sm:text-4xl lg:text-5xl">
              지금 바로 문의하세요
            </h2>
            <p className="font-NanumGothic mb-10 text-xl text-white/90 drop-shadow-xl sm:text-2xl">
              편안한 힐링의 시간을 선물해드립니다
            </p>
            <div className="flex flex-col items-center gap-6">
              <a href={telLink} aria-label={`지금 전화하기 ${phoneNumber}`}>
                <Button
                  size="lg"
                  className="hover:shadow-3xl group h-auto bg-gradient-to-r from-[#eb5459] to-orange-200 px-12 py-7 text-3xl font-bold text-white shadow-2xl transition-all duration-300 hover:bg-[var(--massage-coral-200)] sm:px-20 sm:py-9 sm:text-4xl"
                >
                  {phoneNumber}
                </Button>
              </a>
              <p className="text-lg text-white/90 drop-shadow-lg sm:text-xl">
                언제든지 편하게 연락주세요
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Payment Methods Section */}
      <section className="font-NanumGothic bg-gradient-to-b from-[var(--massage-beige-200)] via-[var(--massage-coral-100)] to-[var(--massage-beige-200)] px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-NanumGothic mb-12 text-center text-3xl tracking-wide sm:text-4xl">
            결제 방법
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
            <div className="flex flex-col items-center rounded-2xl bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-2xl">
              <div className="mb-4 rounded-full bg-[var(--massage-coral-200)] p-6">
                <Banknote className="h-10 w-10 text-white sm:h-12 sm:w-12" />
              </div>
              <h3 className="text-xl font-bold text-[var(--massage-brown-900)] sm:text-2xl">
                현금
              </h3>
              <p className="mt-2 text-center text-base text-[var(--massage-brown-700)] sm:text-lg">
                현장 결제 가능
              </p>
            </div>

            <div className="flex flex-col items-center rounded-2xl bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-2xl">
              <div className="mb-4 rounded-full bg-[var(--massage-coral-200)] p-6">
                <CreditCard className="h-10 w-10 text-white sm:h-12 sm:w-12" />
              </div>
              <h3 className="text-xl font-bold text-[var(--massage-brown-900)] sm:text-2xl">
                카드
              </h3>
              <p className="mt-2 text-center text-base text-[var(--massage-brown-700)] sm:text-lg">
                모든 카드 사용 가능
              </p>
            </div>

            <div className="flex flex-col items-center rounded-2xl bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-2xl">
              <div className="mb-4 rounded-full bg-[var(--massage-coral-200)] p-6">
                <Wallet className="h-10 w-10 text-white sm:h-12 sm:w-12" />
              </div>
              <h3 className="text-xl font-bold text-[var(--massage-brown-900)] sm:text-2xl">
                계좌이체
              </h3>
              <p className="mt-2 text-center text-base text-[var(--massage-brown-700)] sm:text-lg">
                편리한 이체 가능
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
