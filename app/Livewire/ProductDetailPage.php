<?php

namespace App\Livewire;

use App\Helpers\CartManagement;
use Livewire\Attributes\Title;
use Livewire\Component;
use Jantinnerezo\LivewireAlert\Facades\LivewireAlert;



#[Title('Product Detail - E-commerce')]
class ProductDetailPage extends Component
{

    public $slug;

    public $quantity = 1;

    public function mount($slug)
    {
        $this->slug = $slug;
    }

    public function increaseQty()
    {
        $this->quantity++;
    }

    public function decreaseQty()
    {
        if($this->quantity > 1)
        {
            $this->quantity--;
        }
    }

    // add product to cart method
    public function addToCart($product_id)
    {
        
        
        $total_count = CartManagement::addItemToCartWithQty($product_id, $this->quantity);
        // CartManagement::addItemToCart($product_id);


        $this->dispatch('update-cart-count', total_count: $total_count);
        
        // $this->alert->success('Added to cart!', [
        //     'position' => 'bottom-end',
        //     'timer' => 3000,
        //     'toast' => true,

        // ]);

        LivewireAlert::title('Added to cart!')
            ->success()
            ->toast()
            ->position('bottom-end')
            ->timer(3000)
            ->show();

    }

    public function render()
    {

        return view('livewire.product-detail-page', [
            'product' => \App\Models\Product::where('slug', $this->slug)->firstOrFail(),
        ]);
    }
}
