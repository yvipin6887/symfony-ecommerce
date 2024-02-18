<?php

namespace App\Vk\UserManagement\Entity;

use App\Vk\UserManagement\Repository\UserRepository;
use App\Vk\UserManagement\State\UserPasswordHasher;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\DBAL\Types\Types;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Post;
use ApiPlatform\Metadata\Put;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ApiResource(
    operations: [
        new GetCollection(),
        new Post(processor: UserPasswordHasher::class, validationContext: ['groups' => ['Default', 'user:create']]),
        new Get(),
        new Put(processor: UserPasswordHasher::class),
        new Patch(processor: UserPasswordHasher::class),
        new Delete(),
    ],
)]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id;

    #[ORM\Column(length: 225, unique: true)]
    private $username;

    #[ORM\Column(length: 225, unique: true)]
    private $email;
    #[ORM\Column(length: 225)]
    private ?string $password = null;

    private ?string $plainPassword = null;

    #[ORM\Column(type: Types::ARRAY)]
    private $roles = [];

    #[ORM\Column(type: 'datetime')]
    private ? \DateTime $createdAt;

    #[ORM\Column(type: 'datetime')]
    private ? \DateTime $updatedAt;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(string $username): static
    {
        $this->username = $username;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;

        return $this;
    }

    public function getPlainPassword(): ?string
    {
        return $this->plainPassword;
    }

    public function setPlainPassword(?string $plainPassword): self
    {
        $this->plainPassword = $plainPassword;

        return $this;
    }

    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';
 
        return array_unique($roles);
    }

    public function setRoles(array $roles): static
    {
        $this->roles = $roles;

        return $this;
    }

    public function getApiToken(): ?string
    {
        return $this->apiToken;
    }
    
    /**
    * Removes sensitive data from the user.
    */
    public function eraseCredentials(): void
    {
        // if you had a plainPassword property, you'd nullify it here
        $this->plainPassword = null;
    }

    public function getUserIdentifier(): string
    {
        return $this->email;
    }
}