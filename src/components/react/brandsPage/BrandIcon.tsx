import { Smartphone, Apple, Cpu, Zap, Flower2, Tv, Triangle, Infinity, Phone, Smile } from "lucide-react"

export const IphoneIcon = () => <Apple className="w-8 h-8 md:w-12 md:h-12" />

export const SamsungIcon = () => (
  <div className="w-12 h-12 flex items-center justify-center">
    <span className="text-2xl font-bold">S</span>
  </div>
)

export const MotorolaIcon = () => (
  <div className="w-12 h-12 flex items-center justify-center">
    <span className="text-3xl font-bold">M</span>
  </div>
)

export const XiaomiIcon = () => (
  <div className="w-12 h-12 flex items-center justify-center border-2 border-current rounded-lg">
    <span className="text-xl font-bold">MI</span>
  </div>
)

export const HuaweiIcon = () => <Flower2 className="w-12 h-12" />

export const TclIcon = () => <Tv className="w-12 h-12" />

export const ZteIcon = () => <Triangle className="w-12 h-12" />

export const InfinixIcon = () => <Infinity className="w-12 h-12" />

export const AlcatelIcon = () => <Phone className="w-12 h-12" />

export const LgIcon = () => <Smile className="w-12 h-12" />