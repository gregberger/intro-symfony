<?php
/**
 * Created by PhpStorm.
 * User: gberger
 * Date: 04/05/2020
 * Time: 21:26
 */

namespace App\Services;


interface ArticlesRepositoryInterface {

    public function findAll();

    public function findById(int $id);
}