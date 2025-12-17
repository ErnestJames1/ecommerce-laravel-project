import './bootstrap';
import 'preline';

import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()

document.addEventListener('livewire:navigated', () => {
    if (window.HSStaticMethods) {
        window.HSStaticMethods.autoInit();
    }
});

document.addEventListener('DOMContentLoaded', init)
document.addEventListener('livewire:init', init)
document.addEventListener('livewire:navigated', init)
document.addEventListener('livewire:update', init)

// import './bootstrap'
// import 'preline'

// function initPreline() {
//   window.HSStaticMethods?.autoInit()
// }

// // run on first page load
// document.addEventListener('DOMContentLoaded', initPreline)

// // run after every Livewire update (this is the key)
// document.addEventListener('livewire:init', () => {
//   Livewire.hook('message.processed', () => {
//     initPreline()
//   })
// })

// // run after wire:navigate page swaps
// document.addEventListener('livewire:navigated', initPreline)

