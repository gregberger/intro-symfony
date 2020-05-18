<?php

namespace App\Controller;

use App\Entity\Author;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class AuthorController
 * @package App\Controller
 */
class AuthorController extends AbstractController
{
    /**
     * @Route("/blog/authors", name="app_blog_authors")
     */
    public function index()
    {
        $authors = $this->getDoctrine()->getManager()
                    ->getRepository( Author::class)
                    ->findAll();

        return $this->render('author/index.html.twig', [
            'authors' => $authors,
        ]);
    }
}
