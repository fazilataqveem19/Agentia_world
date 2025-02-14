import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/Button";
import underlneImage from "@/assets/images/underline.svg?url"
import { Orbit } from "@/components/Orbit";

export const CallToAction = () => {
  return (
    <section>
      <div className="container mx-auto px-4 lg:px-0 xl:px-16">
        <div className="border-l border-r border-t border-[var(--color-border)] relative">
          <>
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
              <FontAwesomeIcon icon={faPlus} className="size-3 text-gray-200" />
            </div>
            <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
              <FontAwesomeIcon icon={faPlus} className="size-3 text-gray-200" />
            </div>
          </>
          <div className="container py-24 md:py-40 md:px-20 relative isolate">
            <div className="absolute -z-10 inset-0 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_75%,transparent)] [mask-image:radial-gradient(circle_farthest-side,black,transparent)]"></div>

            <div className="absolute inset-0 -z-10 overflow-hidden">

<Orbit className="size-[200px] absolute-center" />
<div className="absolute left-[70%] top-[10%] -translate-x-1/2 -translate-y-1/2 hidden md:block">
  <div className="bg-gradient-to-b from-violet-400 to-gray-950 w-4 h-4 rounded-full"></div>
</div>


<Orbit className="size-[350px] absolute-center" />
<div className="absolute right-[70%] top-[80%] -translate-x-1/2 -translate-y-1/2 hidden sm:block"> 
  <div className="bg-gradient-to-b from-violet-400 to-gray-950 w-6 h-6 rounded-full"></div>
</div>


<Orbit className="size-[500px] absolute-center" />
<div className="absolute left-[10%] bottom-[30%] -translate-x-1/2 -translate-y-1/2">
</div>


<Orbit className="size-[650px] absolute-center hidden sm:block" />
<div className="absolute right-[20%] bottom-[25%] -translate-x-1/2 -translate-y-1/2 hidden sm:block">
  <div className="bg-gradient-to-b from-violet-400 to-gray-950 w-7 h-7 rounded-full"></div>
</div>


<Orbit className="size-[800px] absolute-center hidden sm:block" />
<div className="absolute left-[40%] top-[10%] -translate-x-1/2 -translate-y-1/2 hidden sm:block">
  <div className="bg-gradient-to-b from-violet-400 to-gray-950 w-8 h-8 rounded-full"></div>
</div>
</div>



            <div className="absolute-center-z-10">
              
            </div>
           <h2 className="text-gray-200 font-semibold text-3xl md:text-4xl lg:text-5xl max-w-3xl mx-auto text-center leading-tight">Join the AI Revolution with{" "}
            <span className="relative">
            <span>Agentia</span>
            <span className="absolute top-full left-0 w-full -translate-y-1/2 h-4 bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-teal-300),var(--color-violet-400),var(--color-fuchsia-400))]"
            style={{
              maskImage: `url(${underlneImage.src})`,
              maskSize: "contain",
              maskPosition: "center",
              maskRepeat: "no-repeat",
            }}
            >
            </span>
            </span>
           </h2>
           <p className="text-center text-xl mt-8 max-w-2xl mx-auto">
            Experience the transformative power of AI with Agentia World. Boost your productivity and streamline your workflow with our innovative AI chat platform.
           </p>
           <div className="flex justify-center mt-10">
           <Button variant="secondary">Get Started</Button>
           </div> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

