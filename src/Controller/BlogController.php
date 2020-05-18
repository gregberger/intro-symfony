<?php

namespace App\Controller;

use App\Entity\BlogArticle;
use App\Services\ArticlesRepository;
use App\Services\ArticlesRepositoryInterface;
use Faker\Generator;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class BlogController
 * @package App\Controller
 * @Route("/blog", name="app_blog_")
 */
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
     * @Route("/", name="index")
     */
    public function index($name = "Hello world")
    {
        // $articles = $this->articleRepository->findAll();
        $articles = $this->getDoctrine()
                         ->getRepository(BlogArticle::class)
                         ->findAll();


        return $this->render( 'blog/index.html.twig',
            ['items' => $articles,'page_title' => $name]
        );
    }

    /**
     * @Route("/articles/{id<\d+>}", name="show")
     */
    public function show($id, BlogArticle $article, Request $request){

        if($article === null){
           throw $this->createNotFoundException("Article not found");
        }
        return $this->render('blog/article.html.twig', ['article'=>$article, 'page_title'=>$article->getTitle()]);
    }


    /**
     * @return Response
     * @Route("/create", name="create")
     */
    public function createArticle(ArticlesRepository $articlesGenerator) {
        $em = $this->getDoctrine()->getManager();

       $article = $articlesGenerator->generateArticleEntity();

        $em->persist( $article);

        $em->flush();

        return $this->redirectToRoute( 'app_blog_index');

    }
}
