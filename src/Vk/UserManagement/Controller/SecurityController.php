<?php

namespace App\Vk\UserManagement\Controller;

use App\Vk\UserManagement\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Http\Attribute\CurrentUser;
use Symfony\Component\HttpKernel\Attribute\AsController;
use Symfony\Component\Routing\Annotation\Route;
use App\Vk\UserManagement\Repository\ApiTokenRepository;

#[AsController]
class SecurityController extends AbstractController
{
    public function __construct(protected ApiTokenRepository $apiTokenRepository)
    {
    }

    #[Route(
        path: '/api/login', 
        name: 'app_login', 
        methods: ['POST'],
    )]
    public function login(#[CurrentUser] User $user = null): Response
    {
        if (!$user) {
            return $this->json([
                'error' => 'Invalid login request: check that the Content-Type header is "application/json".',
            ], 401);
        }
    
        $token = $this->apiTokenRepository->generateToken($user, true);

        return $this->json([
            'user' => $user->getUserIdentifier(),
            'token' => $token->getToken(),
        ]);
    }
}