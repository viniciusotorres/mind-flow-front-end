package com.example.mindflow.negocios;
import com.example.mindflow.model.Usuario;
import com.example.mindflow.repositoy.UsuarioRepository;
import org.springframework.stereotype.Component;

import java.util.Optional;
@Component
public class UsuarioLogadoNegocio {


    private final UsuarioRepository usuarioRepository;

    public UsuarioLogadoNegocio(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }


    public boolean verificaSeUsuarioERegistrado(Usuario usuario){
        Optional<Usuario> usuarioRegistrado = usuarioRepository.findByEmail(usuario.getEmail());


        return usuarioRegistrado.isPresent() && usuarioRegistrado.get().getSenha().equals(usuario.getSenha());
    }

}
