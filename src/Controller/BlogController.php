<?php

namespace App\Controller;

use App\Services\ArticlesRepositoryInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class BlogController extends AbstractController
{

    /**
     * @var ArticlesRepositoryInterface
     */
    private $articleRepository;

    public function __construct(ArticlesRepositoryInterface $articlesRepository) {
        $this->articleRepository = $articlesRepository;
    }

    /**
     * @Route("/blog", name="blog")
     */
    public function index($name = "world")
    {
        $articles = $this->articleRepository->findAll();

        return $this->render( 'blog/index.html.twig',
            ['items' => $articles,'page_title' => $name]
        );
    }

    /**
     * @Route("/blog/articles/{id<\d+>}", name="app_blog_show")
     */
    public function show($id, Request $request){
        $article = $this->articleRepository->findById( $id);
        if($article === null){
           throw $this->createNotFoundException("Article not found");
        }
        return $this->render('blog/article.html.twig', ['article'=>$article]);
    }
}
