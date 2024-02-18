<?php

namespace App\Vk\Admin\ProductManagement\Repository;

use App\Vk\Admin\ProductManagement\Entity\MediaObject;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class MediaObjectRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MediaObject::class);
    }
}