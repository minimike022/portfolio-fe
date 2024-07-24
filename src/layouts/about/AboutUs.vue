<script setup>



</script>
<template>
    <!-- Anchor -->
    <div class="bg-[#050d16] px-5 py-5 md:mt-[40dvh] relative md:px-20">
        <div id="about" class="h-10 absolute top-[-10dvh]"></div>
        <div class="grid grid-cols-1 relative
        md:max-lg:py-[5dvh] md:flex md:justify-between md:mx-[-4em]
        lg:mx-[5em]
        xl:mx-[9em]
        ">
            <div class="h-[30dvh] my-5 relative 
        md:w-[40dvh] md:h-[40dvh] md:ml-6 md:top-0 md:right-0">
                <div class="absolute h-[30dvh] w-[30dvh] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            md:w-[45dvh] md:h-[45dvh] md:top-0 md:left-9 md:translate-x-0 md:translate-y-0">
                    <img src="/src/assets/profilePhoto/profile.png" alt="" class="rounded-md">
                </div>
            </div>
            <!-- Contents -->
            <div class="w-auto 
        md:w-[80dvh] 
        lg:px-4
        text-white">
                <div class="flex items-center">
                    <h1 class="text-3xl lg:text-5xl text-primary font-bold">About</h1>
                    <div class="ml-4 w-full h-[.4dvh] bg-[#8E8E8E]"></div>
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

                    </p>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 text-white my-8">
            <div class="flex flex-col items-center">
                <h1 class="md:text-xl font-bold">Technologies</h1>
                <div class="grid grid-cols-4 items-center gap-y-8 gap-x-14 mt-4">
                    <div class="relative group">
                        <img src="/src/assets/languagesLogo/html-5.png" alt="" class="w-[2.5em] md:hover:scale-125">
                        <div class="absolute top-[-2em] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0a1e36] w-auto px-6 py-2 rounded-lg hidden md:group-hover:block">
                            <h1 class="text-sm font-semibold">HTML</h1>
                        </div>
                    </div>
                    <div class="relative group">
                        <img src="/src/assets/languagesLogo/css-3.png" alt="" class="w-[2.5em] md:hover:scale-125">
                        <div class="absolute top-[-2em] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0a1e36] w-auto px-6 py-2 rounded-lg hidden md:group-hover:block">
                            <h1 class="text-sm font-semibold">CSS</h1>
                        </div>
                    </div>
                    <div class="relative group">
                        <img src="/src/assets/languagesLogo/tailwind.png" alt="" class="w-[2.5em] md:hover:scale-125">
                        <div class="absolute top-[-2em] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0a1e36] w-auto px-6 py-2 rounded-lg hidden md:group-hover:block">
                            <h1 class="text-sm font-semibold">Tailwind</h1>
                        </div>
                    </div>
                    <div class="relative group">
                        <img src="/src/assets/languagesLogo/js.png" alt="" class="w-[2.5em] md:hover:scale-125">
                        <div class="absolute top-[-2em] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0a1e36] w-auto px-6 py-2 rounded-lg hidden md:group-hover:block">
                            <h1 class="text-sm font-semibold">JavaScript</h1>
                        </div>
                    </div>
                    <div class="relative group">
                        <img src="/src/assets/languagesLogo/react.png" alt="" class="w-[2.5em] md:hover:scale-125">
                        <div class="absolute top-[-2em] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0a1e36] w-auto px-6 py-2 rounded-lg hidden md:group-hover:block">
                            <h1 class="text-sm font-semibold">ReactJS</h1>
                        </div>
                    </div>
                    <div class="relative group">
                        <img src="/src/assets/languagesLogo/vue.png" alt="" class="w-[2.5em] md:hover:scale-125">
                        <div class="absolute top-[-2em] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0a1e36] w-auto px-6 py-2 rounded-lg hidden md:group-hover:block">
                            <h1 class="text-sm font-semibold">VueJS</h1>
                        </div>
                    </div>
                    <div class="relative group">
                        <img src="/src/assets/languagesLogo/c-sharp.png" alt="" class="w-[2.5em] md:hover:scale-125">
                        <div class="absolute top-[-2em] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0a1e36] w-auto px-6 py-2 rounded-lg hidden md:group-hover:block">
                            <h1 class="text-sm font-semibold">C#</h1>
                        </div>
                    </div>
                    <div class="relative group">
                        <img src="/src/assets/languagesLogo/java.png" alt="" class="w-[2.5em] md:hover:scale-125"> 
                        <div class="absolute top-[-2em] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0a1e36] w-auto px-6 py-2 rounded-lg hidden md:group-hover:block">
                            <h1 class="text-sm font-semibold">Java</h1>
                        </div>
                    </div>
                    <div class="relative group">
                        <img src="/src/assets/languagesLogo/python.png" alt="" class="w-[2.5em] md:hover:scale-125"> 
                        <div class="absolute top-[-2em] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0a1e36] w-auto px-6 py-2 rounded-lg hidden md:group-hover:block">
                            <h1 class="text-sm font-semibold">Python</h1>
                        </div>
                    </div>
                    <div class="relative group">
                        <img src="/src/assets/languagesLogo/php.png" alt="" class="w-[2.5em] md:hover:scale-125">
                        <div class="absolute top-[-2em] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0a1e36] w-auto px-6 py-2 rounded-lg hidden md:group-hover:block">
                            <h1 class="text-sm font-semibold">PHP</h1>
                        </div>
                    </div>
                    <div class="relative group">
                        <img src="/src/assets/languagesLogo/laravel.png" alt="" class="w-[2.5em] md:hover:scale-125">
                        <div class="absolute top-[-2em] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0a1e36] w-auto px-6 py-2 rounded-lg hidden md:group-hover:block">
                            <h1 class="text-sm font-semibold">Laravel</h1>
                        </div>
                    </div>
                    <div class="relative group">
                        <img src="/src/assets/languagesLogo/Go.svg" alt="" class="w-[2.5em] md:hover:scale-125">
                        <div class="absolute top-[-2em] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0a1e36] w-auto px-6 py-2 rounded-lg hidden md:group-hover:block">
                            <h1 class="text-sm font-semibold">Go</h1>
                        </div>
                    </div>
                    <div class="relative group">
                        <img src="/src/assets/languagesLogo/jquery.png" alt="" class="w-[2.5em] md:hover:scale-125">
                        <div class="absolute top-[-2em] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0a1e36] w-auto px-6 py-2 rounded-lg hidden md:group-hover:block">
                            <h1 class="text-sm font-semibold">JQuery</h1>
                        </div>
                    </div>
                    <div class="relative group">
                        <img src="/src/assets/languagesLogo/ajax.png" alt="" class="w-[2.5em] md:hover:scale-125">
                        <div class="absolute top-[-2em] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0a1e36] w-auto px-6 py-2 rounded-lg hidden md:group-hover:block">
                            <h1 class="text-sm font-semibold">AJAX</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center mt-8 md:mt-0">
                <h1 class="md:text-xl font-bold">Badges and Certifications</h1>
                <div class="mt-4">
                    <img src="/src/assets/certifications/awsCert.png" alt="" class="w-[5em]">
                </div>
            </div>
        </div>
    </div>
</template>