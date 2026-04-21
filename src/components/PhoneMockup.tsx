interface RideOption {
  readonly name: string;
  readonly eta: string;
  readonly price: string;
  readonly selected?: boolean;
}

interface PhoneMockupProps {
  readonly origin?: string;
  readonly destination?: string;
  readonly time?: string;
  readonly options?: readonly RideOption[];
}

const defaultOptions: readonly RideOption[] = [
  { name: "Estándar", eta: "4 min · 3.8 km", price: "$2.800" },
  { name: "Plus ✦", eta: "6 min · premium", price: "$3.600", selected: true },
];

export default function PhoneMockup({
  origin = "Av. Corrientes 1500",
  destination = "Palermo Soho",
  time = "CABA · 21:34",
  options = defaultOptions,
}: PhoneMockupProps) {
  return (
    <div className="relative">
      <span className="absolute -top-px -left-px w-5 h-5 border-filete-dorado border-solid border-t-[3px] border-l-[3px] z-10" />
      <span className="absolute -top-px -right-px w-5 h-5 border-filete-dorado border-solid border-t-[3px] border-r-[3px] z-10" />
      <span className="absolute -bottom-px -left-px w-5 h-5 border-filete-dorado border-solid border-b-[3px] border-l-[3px] z-10" />
      <span className="absolute -bottom-px -right-px w-5 h-5 border-filete-dorado border-solid border-b-[3px] border-r-[3px] z-10" />

      <div className="w-[248px] h-[504px] bg-filete-ng2 border-2 border-filete-dorado overflow-hidden relative">
        <div className="bg-filete-rojo px-4 py-[0.65rem] flex justify-between items-center border-b-2 border-filete-dorado">
          <span className="font-display text-[1rem] font-black text-filete-crema">
            Mi<em className="italic text-filete-dorado">Traslado</em>
          </span>
          <span className="text-[0.6rem] text-filete-crema/70 tracking-[0.08em]">
            {time}
          </span>
        </div>

        <div className="h-[195px] bg-filete-ng3 relative overflow-hidden">
          <svg
            width="248"
            height="195"
            viewBox="0 0 248 195"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="248" height="195" fill="#1C1609" />
            <g stroke="#2E2210" strokeWidth="7" fill="none">
              <line x1="0" y1="49" x2="248" y2="49" />
              <line x1="0" y1="98" x2="248" y2="98" />
              <line x1="0" y1="147" x2="248" y2="147" />
              <line x1="50" y1="0" x2="50" y2="195" />
              <line x1="100" y1="0" x2="100" y2="195" />
              <line x1="150" y1="0" x2="150" y2="195" />
              <line x1="200" y1="0" x2="200" y2="195" />
            </g>
            <g stroke="#3A2C14" strokeWidth="2" fill="none">
              <line x1="0" y1="24" x2="248" y2="24" />
              <line x1="0" y1="73" x2="248" y2="73" />
              <line x1="0" y1="122" x2="248" y2="122" />
              <line x1="0" y1="171" x2="248" y2="171" />
              <line x1="25" y1="0" x2="25" y2="195" />
              <line x1="75" y1="0" x2="75" y2="195" />
              <line x1="125" y1="0" x2="125" y2="195" />
              <line x1="175" y1="0" x2="175" y2="195" />
              <line x1="225" y1="0" x2="225" y2="195" />
            </g>
            <rect
              x="30"
              y="55"
              width="34"
              height="20"
              fill="#251D0B"
              stroke="#3A2C14"
              strokeWidth="1"
            />
            <rect
              x="108"
              y="30"
              width="28"
              height="16"
              fill="#251D0B"
              stroke="#3A2C14"
              strokeWidth="1"
            />
            <rect
              x="158"
              y="105"
              width="40"
              height="22"
              fill="#251D0B"
              stroke="#3A2C14"
              strokeWidth="1"
            />
            <rect
              x="60"
              y="130"
              width="30"
              height="18"
              fill="#251D0B"
              stroke="#3A2C14"
              strokeWidth="1"
            />
            <path
              d="M38 158 L38 98 L100 98 L100 49 L175 49 L175 116"
              stroke="#D4A017"
              strokeWidth="2.5"
              fill="none"
              strokeDasharray="7 3"
            />
            <circle cx="38" cy="158" r="7" fill="#D4A017" />
            <circle
              cx="38"
              cy="158"
              r="13"
              fill="none"
              stroke="#D4A017"
              strokeWidth="1.5"
              opacity="0.3"
            />
            <circle cx="175" cy="116" r="7" fill="#C8181E" />
            <circle
              cx="175"
              cy="116"
              r="13"
              fill="none"
              stroke="#C8181E"
              strokeWidth="1.5"
              opacity="0.3"
            />
            <g transform="translate(90,86)">
              <rect x="-14" y="-9" width="28" height="18" fill="#1A6B2F" rx="2" />
              <text
                x="0"
                y="4"
                textAnchor="middle"
                fontSize="7"
                fill="#FDF6E3"
                fontWeight="700"
                fontFamily="Space Grotesk,sans-serif"
              >
                4 min
              </text>
            </g>
          </svg>
        </div>

        <div className="p-[0.85rem]">
          <div className="flex items-center gap-2 bg-filete-crema/[0.04] border border-filete-dorado/20 px-3 py-2 mb-[0.6rem]">
            <span className="w-2 h-2 rounded-full bg-filete-dorado shrink-0" />
            <div>
              <div className="text-[0.65rem] text-filete-crema/70">Origen</div>
              <div className="text-[0.7rem] text-filete-crema font-semibold">
                {origin}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-filete-crema/[0.04] border border-filete-dorado/20 px-3 py-2 mb-[0.6rem]">
            <span className="w-2 h-2 rounded-full bg-filete-rojo shrink-0" />
            <div>
              <div className="text-[0.65rem] text-filete-crema/70">Destino</div>
              <div className="text-[0.7rem] text-filete-crema font-semibold">
                {destination}
              </div>
            </div>
          </div>

          <div className="mt-[0.6rem]">
            {options.map((opt) => (
              <div
                key={opt.name}
                className={
                  "flex justify-between items-center px-3 py-[0.55rem] mb-[0.4rem] border " +
                  (opt.selected
                    ? "border-filete-dorado bg-filete-dorado/[0.07]"
                    : "border-filete-dorado/20")
                }
              >
                <div className="flex flex-col gap-[2px]">
                  <span className="text-[0.68rem] font-semibold text-filete-crema tracking-[0.04em]">
                    {opt.name}
                  </span>
                  <span className="text-[0.58rem] text-filete-crema/50">
                    {opt.eta}
                  </span>
                </div>
                <span className="font-display text-[1rem] font-bold text-filete-dorado">
                  {opt.price}
                </span>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="w-full bg-filete-rojo border border-filete-dorado text-filete-crema font-body text-[0.68rem] font-bold tracking-[0.1em] uppercase py-[0.65rem] cursor-pointer mt-2"
          >
            Confirmar traslado
          </button>
        </div>
      </div>
    </div>
  );
}
