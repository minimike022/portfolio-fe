<script setup>
</script>
<template>
    <!-- Anchor -->
    <div class="bg-[#050d16] md:px-20">
        <div id="about" class="h-10"></div>
        <div class=" mb-12 mx-10 md:mt-[11dvh] grid grid-cols-1 md:flex md:justify-between md:mx-[24dvh] relative">
            <div class="mt-2  w-full h-[45dvh]  relative 
        md:w-[40dvh] md:h-[40dvh] md:ml-6 md:top-0 md:right-0
        ">
                <div class="absolute h-[30dvh] w-[30dvh] hidden border-2 border-primary z-0 rounded-md
            md:block md:w-[40dvh] md:h-[40dvh] md:top-6 md:left-16
            "></div>
                <div class="absolute h-[30dvh] w-[30dvh] hidden border-2 border-primary  z-0 rounded-md
            md:block md:w-[40dvh] md:h-[40dvh] md:top-3 md:left-12
            "></div>
                <div class="absolute h-[30dvh] w-[30dvh] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            md:w-[40dvh] md:h-[40dvh] md:top-0 md:left-9 md:translate-x-0 md:translate-y-0
            ">
                    <img src="/src/assets/profilePhoto/profile.jpg" alt="" class="rounded-md">
                </div>
            </div>
            <!-- Contents -->
            <div class="w-auto 
        md:w-[80dvh] 
        text-white">
                <div class="flex items-center">
                    <div class="w-full flex justify-center">
                        <h1 class="text-primary text-xl md:text-3xl">About</h1>
                    </div>
                    <div class="w-full h-[.4dvh] bg-[#8E8E8E]"></div>
                </div>
                <div>
                    <p class="text-gray-200 mt-2 text-xs text-justify md:text-base">
                        Hello! My name is Michael C. Eduardo Jr. I’m a Software Engineer based in Philippines, who
                        really
                        loves and enjoys
                        building things.
                        <br><br>It all started when I was in 9th grade. <span class="text-primary">I built several
                            mobile
                            applications
                            using Java</span>, and when I was in 11th grade, <span class="text-primary">I built multiple
                            game applications in 2D and 3D for both android and
                            windows devices using unity game engine and C#.</span>

                        <br><br>-- Moving forward. I’m very passionate about <span class="text-primary">
                            building modern web applications using multiple
                            technologies,
                        </span> ensuring that each application is built to high quality standards.
                        <br><br>Here are the languages and frameworks that I’ve been working with recently.
                        <br><br>
                    <div class="grid grid-cols-3 gap-y-3 text-sm">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Tailwind</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>Vue</li>
                        <li>C#</li>
                        <li>Java</li>
                        <li>Python</li>
                        <li>Php</li>
                        <li>Laravel</li>
                        <li>Go</li>
                    </div>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>