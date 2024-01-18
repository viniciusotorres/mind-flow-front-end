package com.example.mindflow.controller;

import com.example.mindflow.model.Usuario;
import com.example.mindflow.repositoy.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;
@RestController
@CrossOrigin(origins = "http://localhost:4200") // Substitua pela origem do seu frontend
public class AuthController {
    private final UsuarioRepository usuarioRepository;

    @Autowired

    public AuthController(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> credentials){
        if(autenticarUsuarioLogado(credentials)) {
            return ResponseEntity.ok("Login bem-sucedido!");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciais inválidas");
        }
    }

    private boolean autenticarUsuarioLogado(Map<String, String> credentials){
    String email = credentials.get("email");
    String senha = credentials.get("senha");

    return "vini".equals(email) && "123".equals(senha);
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody Usuario usuario) {
        if(usuarioRepository.findByEmail(usuario.getEmail()).isPresent()){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email já registrado.");

        }
        usuarioRepository.save(usuario);
        return ResponseEntity.ok("Registro bem-sucedido!");

    }
}
