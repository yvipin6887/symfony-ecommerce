<?php

namespace App\Vk\UserManagement\Repository;

use App\Vk\UserManagement\Entity\ApiToken;
use App\Vk\UserManagement\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

class ApiTokenRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ApiToken::class);
    }

    public function generateToken(User $user, bool $flush = false): ApiToken
    {
        $apiToken = new ApiToken($user);
        $this->getEntityManager()->persist($apiToken);

        if ($flush) {
            $this->getEntityManager()->flush();
        }

        return $apiToken;
    }

    public function remove(ApiToken $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }
}