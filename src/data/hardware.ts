import { BsCpu, BsGpuCard, BsKeyboard, BsMemory, BsMotherboard, BsMouse3 } from "react-icons/bs";
import { FiMonitor } from "react-icons/fi";
import { FaMicrophoneLines } from "react-icons/fa6";
import { IconType } from "react-icons/lib";

export type HardwareComponentsType =
  | "cpu" | "gpu" | "ram" | "motherboard" | "case" | "mouse"
  | "keyboard" | "monitor1" | "monitor2" | "microphone" | "audio_interface"
  | "boom_arm" | "mousepad" | "headphones" | "chair" | "ssd1" | "ssd2"
  | "psu" | "fans"

export type HardwareType = {
    type: HardwareComponentsType;
    name: string;
    icon: IconType;
}[];

export const Hardware: HardwareType = [
  {
    type: "cpu",
    name: "AMD RYZEN 5 2600",
    icon: BsCpu,
  },
  {
    type: "gpu",
    name: "NVIDIA GTX 1070 8GB FE",
    icon: BsGpuCard,
  },
  {
    type: "ram",
    name: "DDR4 24 GB",
    icon: BsMemory,
  },
  {
    type: "motherboard",
    name: "ASROCK A320M-HDV R4.0",
    icon: BsMotherboard,
  },
  {
    type: "mouse",
    name: "RAZER BASILISK X HYPERSPEED",
    icon: BsMouse3,
  },
  {
    type: "keyboard",
    name: "GIGABYTE AORUS K1",
    icon: BsKeyboard,
  },
  {
    type: "monitor1",
    name: "FUJITSU B23T-6 LED",
    icon: FiMonitor,
  },
  {
    type: "monitor2",
    name: "PHILIPS FTV",
    icon: FiMonitor,
  },
  {
    type: "microphone",
    name: "RODE PODMIC",
    icon: FaMicrophoneLines,
  },
];
