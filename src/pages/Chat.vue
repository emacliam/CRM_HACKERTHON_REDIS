<template>
    <Container>
        <main class="flex-1 min-w-0 border-t border-gray-200 xl:flex">
            <section
                aria-labelledby="message-heading"
                class="relative flex flex-col flex-1 h-screen min-w-0 overflow-hidden xl:order-last"
            >
                <!-- Top section -->
                <div class="flex-shrink-0 bg-white border-b border-gray-200">
                    <!-- Toolbar-->
                    <div class="flex flex-col justify-center h-16">
                        <div class="px-4 sm:px-6 lg:px-8">
                            <div class="flex justify-between py-3">
                                <!-- Left buttons -->
                                <div>
                                    <span
                                        class="relative z-0 inline-flex rounded-md shadow-sm sm:shadow-none sm:space-x-3"
                                    >
                                        <span class="inline-flex sm:shadow-sm">
                                            <button
                                                type="button"
                                                class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                                            >
                                                <ReplyIcon
                                                    class="mr-2.5 h-5 w-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                                <span>Invite</span>
                                            </button>

                                            <button
                                                type="button"
                                                class="relative items-center hidden px-4 py-2 -ml-px text-sm font-medium text-gray-900 bg-white border border-gray-300 sm:inline-flex rounded-r-md hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                                            >
                                                <UserAddIcon
                                                    class="mr-2.5 h-5 w-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                                <span>Assign</span>
                                            </button>
                                        </span>

                                        <span class="hidden space-x-3 lg:flex">
                                            <button
                                                type="button"
                                                class="relative items-center hidden px-4 py-2 -ml-px text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-md sm:inline-flex hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                                            >
                                                <ArchiveIconSolid
                                                    class="mr-2.5 h-5 w-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                                <span>Archive</span>
                                            </button>
                                            <button
                                                type="button"
                                                class="relative items-center hidden px-4 py-2 -ml-px text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-md sm:inline-flex hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                                            >
                                                <FolderDownloadIcon
                                                    class="mr-2.5 h-5 w-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                                <span>Close Issue</span>
                                            </button>
                                        </span>

                                        <Menu
                                            as="span"
                                            class="relative block -ml-px sm:shadow-sm lg:hidden"
                                        >
                                            <div>
                                                <MenuButton
                                                    class="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 sm:rounded-md sm:px-3"
                                                >
                                                    <span
                                                        class="sr-only sm:hidden"
                                                        >More</span
                                                    >
                                                    <span
                                                        class="hidden sm:inline"
                                                        >More</span
                                                    >
                                                    <ChevronDownIcon
                                                        class="w-5 h-5 text-gray-400 sm:ml-2 sm:-mr-1"
                                                        aria-hidden="true"
                                                    />
                                                </MenuButton>
                                            </div>

                                            <transition
                                                enter-active-class="transition duration-100 ease-out"
                                                enter-from-class="transform scale-95 opacity-0"
                                                enter-to-class="transform scale-100 opacity-100"
                                                leave-active-class="transition duration-75 ease-in"
                                                leave-from-class="transform scale-100 opacity-100"
                                                leave-to-class="transform scale-95 opacity-0"
                                            >
                                                <MenuItems
                                                    class="absolute right-0 mt-2 origin-top-right bg-white rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5 focus:outline-none"
                                                >
                                                    <div class="py-1">
                                                        <MenuItem
                                                            v-slot="{ active }"
                                                        >
                                                            <a
                                                                href="#"
                                                                :class="[
                                                                    active
                                                                        ? 'bg-gray-100 text-gray-900'
                                                                        : 'text-gray-700',
                                                                    'block sm:hidden px-4 py-2 text-sm',
                                                                ]"
                                                            >
                                                                Note
                                                            </a>
                                                        </MenuItem>
                                                        <MenuItem
                                                            v-slot="{ active }"
                                                        >
                                                            <a
                                                                href="#"
                                                                :class="[
                                                                    active
                                                                        ? 'bg-gray-100 text-gray-900'
                                                                        : 'text-gray-700',
                                                                    'block sm:hidden px-4 py-2 text-sm',
                                                                ]"
                                                            >
                                                                Assign
                                                            </a>
                                                        </MenuItem>
                                                        <MenuItem
                                                            v-slot="{ active }"
                                                        >
                                                            <a
                                                                href="#"
                                                                :class="[
                                                                    active
                                                                        ? 'bg-gray-100 text-gray-900'
                                                                        : 'text-gray-700',
                                                                    'block px-4 py-2 text-sm',
                                                                ]"
                                                            >
                                                                Archive
                                                            </a>
                                                        </MenuItem>
                                                        <MenuItem
                                                            v-slot="{ active }"
                                                        >
                                                            <a
                                                                href="#"
                                                                :class="[
                                                                    active
                                                                        ? 'bg-gray-100 text-gray-900'
                                                                        : 'text-gray-700',
                                                                    'block px-4 py-2 text-sm',
                                                                ]"
                                                            >
                                                                Move
                                                            </a>
                                                        </MenuItem>
                                                    </div>
                                                </MenuItems>
                                            </transition>
                                        </Menu>
                                    </span>
                                </div>

                                <!-- Right buttons -->
                                <nav aria-label="Pagination">
                                    <span
                                        class="relative z-0 inline-flex rounded-md shadow-sm"
                                    >
                                        <a
                                            href="#"
                                            class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                                        >
                                            <span class="sr-only">Next</span>
                                            <ChevronUpIcon
                                                class="w-5 h-5"
                                                aria-hidden="true"
                                            />
                                        </a>
                                        <a
                                            href="#"
                                            class="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                                        >
                                            <span class="sr-only"
                                                >Previous</span
                                            >
                                            <ChevronDownIcon
                                                class="w-5 h-5"
                                                aria-hidden="true"
                                            />
                                        </a>
                                    </span>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <!-- Message header -->
                </div>

                <div class="flex-1 min-h-0 mb-24 overflow-y-auto">
                    <div class="pt-5 pb-6 bg-white shadow">
                        <div
                            class="px-4 sm:flex sm:justify-between sm:items-baseline sm:px-6 lg:px-8"
                        >
                            <div class="sm:w-0 sm:flex-1">
                                <h1
                                    id="message-heading"
                                    class="text-lg font-medium text-gray-900"
                                >
                                    {{ message.subject }}
                                </h1>
                                <p class="mt-1 text-sm text-gray-500 truncate">
                                    {{ message.sender }}
                                </p>
                            </div>

                            <div
                                class="flex items-center justify-between mt-4 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:justify-start"
                            >
                                <span
                                    class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-cyan-100 text-cyan-800"
                                >
                                    {{ message.status }}
                                </span>
                                <Menu
                                    as="div"
                                    class="relative inline-block ml-3 text-left"
                                >
                                    <div>
                                        <MenuButton
                                            class="flex items-center p-2 -my-2 text-gray-400 bg-white rounded-full hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        >
                                            <span class="sr-only"
                                                >Open options</span
                                            >
                                            <DotsVerticalIcon
                                                class="w-5 h-5"
                                                aria-hidden="true"
                                            />
                                        </MenuButton>
                                    </div>

                                    <transition
                                        enter-active-class="transition duration-100 ease-out"
                                        enter-from-class="transform scale-95 opacity-0"
                                        enter-to-class="transform scale-100 opacity-100"
                                        leave-active-class="transition duration-75 ease-in"
                                        leave-from-class="transform scale-100 opacity-100"
                                        leave-to-class="transform scale-95 opacity-0"
                                    >
                                        <MenuItems
                                            class="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                        >
                                            <div class="py-1">
                                                <MenuItem v-slot="{ active }">
                                                    <a
                                                        href="#"
                                                        :class="[
                                                            active
                                                                ? 'bg-gray-100 text-gray-900'
                                                                : 'text-gray-700',
                                                            'flex justify-between px-4 py-2 text-sm',
                                                        ]"
                                                    >
                                                        <span
                                                            >View original</span
                                                        >
                                                    </a>
                                                </MenuItem>
                                            </div>
                                        </MenuItems>
                                    </transition>
                                </Menu>
                            </div>
                        </div>
                    </div>
                    <!-- Thread section-->
                    <ul
                        role="list"
                        class="py-4 space-y-2 sm:px-6 sm:space-y-4 lg:px-8"
                    >
                        <li
                            v-for="item in message.items"
                            :key="item.id"
                            class="px-4 py-6 bg-white shadow sm:rounded-lg sm:px-6"
                        >
                            <div
                                class="sm:flex sm:justify-between sm:items-baseline"
                            >
                                <h3 class="text-base font-medium">
                                    <span class="text-gray-900">{{
                                        item.author
                                    }}</span>
                                    {{ ' ' }}
                                    <span class="text-gray-600">wrote</span>
                                </h3>
                                <p
                                    class="mt-1 text-sm text-gray-600 whitespace-nowrap sm:mt-0 sm:ml-3"
                                >
                                    <time :datetime="item.datetime">{{
                                        item.date
                                    }}</time>
                                </p>
                            </div>
                            <div
                                class="mt-4 space-y-6 text-sm text-gray-800"
                                v-html="item.body"
                            />
                        </li>
                    </ul>
                </div>
                <div class="absolute bottom-0 w-full px-8 py-4 h-28">
                    <div
                        class="flex items-center w-full h-full px-8 rounded-lg shadow"
                    >
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            class="w-3/4 h-16 bg-gray-100 border-gray-300 rounded-lg resize-none focus:border-0"
                        ></textarea>
                    </div>
                </div>
            </section></main
    ></Container>
</template>

<script>
import { onMounted, onUnmounted, ref } from 'vue'
import {
    Dialog,
    DialogOverlay,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'
import {
    ArchiveIcon as ArchiveIconSolid,
    ChevronDownIcon,
    ChevronUpIcon,
    DotsVerticalIcon,
    FolderDownloadIcon,
    PencilIcon,
    ReplyIcon,
    SearchIcon,
    UserAddIcon,
} from '@heroicons/vue/solid'
import {
    ArchiveIcon as ArchiveIconOutline,
    BanIcon,
    BellIcon,
    FlagIcon,
    InboxIcon,
    MenuIcon,
    PencilAltIcon,
    UserCircleIcon,
    XIcon,
} from '@heroicons/vue/outline'

const sidebarNavigation = [
    { name: 'Open', href: '#', icon: InboxIcon, current: true },
    { name: 'Archive', href: '#', icon: ArchiveIconOutline, current: false },
    { name: 'Customers', href: '#', icon: UserCircleIcon, current: false },
    { name: 'Flagged', href: '#', icon: FlagIcon, current: false },
    { name: 'Spam', href: '#', icon: BanIcon, current: false },
    { name: 'Drafts', href: '#', icon: PencilAltIcon, current: false },
]

const message = {
    subject: 'App Not Logging In',
    sender: 'john doe',
    status: 'Open',
    items: [
        {
            id: 1,
            author: 'Joe Armstrong',
            date: 'Yesterday at 7:24am',
            datetime: '2021-01-28T19:24',
            body: "<p>Thanks so much! Can't wait to try it out.</p>",
        },
        {
            id: 2,
            author: 'Monica White',
            date: 'Wednesday at 4:35pm',
            datetime: '2021-01-27T16:35',
            body: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada at ultricies tincidunt elit et, enim. Habitant nunc, adipiscing non fermentum, sed est a, aliquet. Lorem in vel libero vel augue aliquet dui commodo.</p>
        <p>Nec malesuada sed sit ut aliquet. Cras ac pharetra, sapien purus vitae vestibulum auctor faucibus ullamcorper. Leo quam tincidunt porttitor neque, velit sed. Tortor mauris ornare ut tellus sed aliquet amet venenatis condimentum. Convallis accumsan et nunc eleifend.</p>
        <p><strong style="font-weight: 600;">Monica White</strong><br/>Customer Service</p>
      `,
        },
        {
            id: 3,
            author: 'Joe Armstrong',
            date: 'Wednesday at 4:09pm',
            datetime: '2021-01-27T16:09',
            body: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada at ultricies tincidunt elit et, enim. Habitant nunc, adipiscing non fermentum, sed est a, aliquet. Lorem in vel libero vel augue aliquet dui commodo.</p>
        <p>Nec malesuada sed sit ut aliquet. Cras ac pharetra, sapien purus vitae vestibulum auctor faucibus ullamcorper. Leo quam tincidunt porttitor neque, velit sed. Tortor mauris ornare ut tellus sed aliquet amet venenatis condimentum. Convallis accumsan et nunc eleifend.</p>
        <p>– Joe</p>
      `,
        },
        {
            id: 4,
            author: 'Joe Armstrong',
            date: 'Wednesday at 4:09pm',
            datetime: '2021-01-27T16:09',
            body: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada at ultricies tincidunt elit et, enim. Habitant nunc, adipiscing non fermentum, sed est a, aliquet. Lorem in vel libero vel augue aliquet dui commodo.</p>
        <p>Nec malesuada sed sit ut aliquet. Cras ac pharetra, sapien purus vitae vestibulum auctor faucibus ullamcorper. Leo quam tincidunt porttitor neque, velit sed. Tortor mauris ornare ut tellus sed aliquet amet venenatis condimentum. Convallis accumsan et nunc eleifend.</p>
        <p>– Joe</p>
      `,
        },
        {
            id: 5,
            author: 'Joe Armstrong',
            date: 'Wednesday at 4:09pm',
            datetime: '2021-01-27T16:09',
            body: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada at ultricies tincidunt elit et, enim. Habitant nunc, adipiscing non fermentum, sed est a, aliquet. Lorem in vel libero vel augue aliquet dui commodo.</p>
        <p>Nec malesuada sed sit ut aliquet. Cras ac pharetra, sapien purus vitae vestibulum auctor faucibus ullamcorper. Leo quam tincidunt porttitor neque, velit sed. Tortor mauris ornare ut tellus sed aliquet amet venenatis condimentum. Convallis accumsan et nunc eleifend.</p>
        <p>– Joe</p>
      `,
        },
    ],
}
import MessageService from '../services/message'
import { useRoute } from 'vue-router'
const socket = io('ws://10.15.20.184:5000')

export default {
    components: {
        Menu,
        MenuButton,
        MenuItem,
        MenuItems,

        ArchiveIconSolid,

        ChevronDownIcon,
        ChevronUpIcon,
        DotsVerticalIcon,
        FolderDownloadIcon,

        ReplyIcon,

        UserAddIcon,
    },

    data() {
        return {}
    },
    methods: {},
    setup() {
        const open = ref(false)
        const messages = ref([])
        const MESSAGE = ref([])
        const route = useRoute()
        const loading = ref(false)

        onMounted(() => {
            FETCH_MESSAGES(route.params.id)
            socket.on('connect', () => {
                console.log(socket.connected)
            })

            socket.on('disconnect', () => {
                socket.connect()
                console.log('connected false')
            })

            socket.on('change-issue-status-response', (response) => {
                //TODO: CHECK RESPONSE STATUS
                console.log('issue status changed')
            })

            socket.on('receive_message', (response) => {
                console.log(response.data)
            })
        })

        onUnmounted(() => {
            socket.close()
        })

        async function FETCH_MESSAGES(ID) {
            try {
                loading.value = true
                const response = await MessageService.getAll(ID)
                console.log(response.data.data)
                loading.value = false
            } catch (error) {
                loading.value = false
                console.log(error)
            }
        }

        async function SEND_MESSAGE(id) {
            try {
                const data = {
                    issue_id: id,
                    sender: store.state.auth.user.pk,
                    message_body: MESSAGE.value,
                }
                loading.value = true
                socket.emit('send_message', data, (data) => {
                    console.log(data)
                })
            } catch (error) {
                loading.value = false
                console.log(error)
            }
        }

        return {
            sidebarNavigation,
            message,
            open,
            loading,
            SEND_MESSAGE,
        }
    },
}
</script>
