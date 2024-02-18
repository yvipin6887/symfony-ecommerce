<?php

namespace App\Vk\UserManagement\DependencyInjection;

use Symfony\Component\Config\Definition\Builder\TreeBuilder;
use Symfony\Component\Config\Definition\ConfigurationInterface;

class Configuration implements ConfigurationInterface
{
    public function getConfigTreeBuilder(): TreeBuilder
    {
        $treeBuilder = new TreeBuilder('vkusermanagement');

        // Define your bundle configuration here
        $treeBuilder
        ->getRootNode()
            ->addDefaultsIfNotSet()
            ->children()
            ->arrayNode('api_platform')
                ->canBeEnabled()
                ->info('API Platform compatibility: add check_path in OpenAPI documentation.')
                ->children()
                    ->scalarNode('check_path')
                        ->defaultNull()
                        ->info('The login check path to add in OpenAPI.')
                    ->end()
                    ->scalarNode('username_path')
                        ->defaultNull()
                        ->info('The path to the username in the JSON body.')
                    ->end()
                    ->scalarNode('password_path')
                        ->defaultNull()
                        ->info('The path to the password in the JSON body.')
                    ->end()
                ->end()
            ->end();

        return $treeBuilder;
    }
}
