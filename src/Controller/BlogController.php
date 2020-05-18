<?php

namespace App\Controller;

use App\Entity\Author;
use App\Entity\BlogArticle;
use App\Services\ArticlesGenerator;
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
    public function show(BlogArticle $article, Request $request){
        // $article = $this->getDoctrine()->getRepository( BlogArticle::class)->find( $id);
        return $this->render('blog/article.html.twig', ['article'=>$article, 'page_title'=>$article->getTitle()]);
    }

    /**
     * @Route("/update/{id}", name="update")
     */
    public function updateArticle( BlogArticle $article ) {
        $article->setAuthor( "The magnificent Guillaume");
        $em = $this->getDoctrine()->getManager();
        $em->persist( $article);
        $em->flush();

        return $this->render( 'blog/article.html.twig', ['article'=>$article, 'page_title'=>$article->getTitle()]);
    }

    /**
     * @Route("/delete/{id}", name="delete")
     */
    public function deleteArticle( BlogArticle $article ) {
        $em = $this->getDoctrine()->getManager();
        $em->remove( $article);
        $em->flush();

        return $this->redirectToRoute( 'app_blog_index');
    }


    /**
     * @return Response
     * @Route("/create", name="create")
     */
    public function createArticle(ArticlesGenerator $articlesGenerator) {
        $em = $this->getDoctrine()->getManager();

       $article = $articlesGenerator->generateArticleEntity();
       $auth = new Author();
       $auth->setName( 'Lorem Ipsum');
       $em->persist( $auth);
       $article->setAuthor($auth);
        
        $em->persist( $article);

        $em->flush();

        return $this->redirectToRoute( 'app_blog_show', ['id'=>$article->getId()]);

    }


}
