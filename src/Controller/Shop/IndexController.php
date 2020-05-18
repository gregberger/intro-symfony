<?php

namespace App\Controller\Shop;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{
    /**
     * @Route("/shop", name="shop_index")
     */
    public function index()
    {
        return $this->render('shop/index/index.html.twig', [
            'controller_name' => 'IndexController',
        ]);
    }
}
