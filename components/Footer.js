import React from 'react';

export default function Footer() {
    return (
        <div className = 'my-8'>
            <section class="bg-gray-800 py-8 w-full">
            <div class="container mx-auto px-8">
                <div class="table w-full">
                    <div class="block sm:table-cell">
                        <p class="uppercase text-white text-sm sm:mb-6">Links</p>
                        <ul class="list-reset text-xs mb-6">
                            <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                <a href="https://tailwindcss.com/docs/guides/create-react-app" class="text-white hover:text-grey-dark">FAQ</a>
                            </li>
                            <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                <a href="#" class="text-white hover:text-grey-dark">Help</a>
                            </li>
                            <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                <a href="#" class="text-grey hover:text-grey-dark">Support</a>
                            </li>
                        </ul>
                    </div>
                    <div class="block sm:table-cell">
                        <p class="uppercase text-grey text-sm sm:mb-6">Legal</p>
                        <ul class="list-reset text-xs mb-6">
                            <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                <a href="#" class="text-grey hover:text-grey-dark">Terms</a>
                            </li>
                            <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                <a href="#" class="text-grey hover:text-grey-dark">Privacy</a>
                            </li>
                        </ul>
                    </div>
                    <div class="block sm:table-cell">
                        <p class="uppercase text-grey text-sm sm:mb-6">Social</p>
                        <ul class="list-reset text-xs mb-6">
                            <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                <a href="#" class="text-grey hover:text-grey-dark">Facebook</a>
                            </li>
                            <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                <a href="#" class="text-grey hover:text-grey-dark">Linkedin</a>
                            </li>
                            <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                <a href="#" class="text-grey hover:text-grey-dark">Twitter</a>
                            </li>
                        </ul>
                    </div>
                    <div class="block sm:table-cell">
                        <p class="uppercase text-grey text-sm sm:mb-6">Company</p>
                        <ul class="list-reset text-xs mb-6">
                            <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                <a href="#" class="text-grey hover:text-grey-dark">Official Blog</a>
                            </li>
                            <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                <a href="#" class="text-grey hover:text-grey-dark">About Us</a>
                            </li>
                            <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
                                <a href="#" class="text-grey hover:text-grey-dark">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}