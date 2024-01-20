package com.example.mindflow.model;

import jakarta.persistence.*;

@Entity
@Table(name = "usuarios")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "usuario_id")
    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
    @Column(name = "email")
    private String email;

    @Column(name = "senha")
    private String senha;

    public String getNomeCompleto() {
        return nomeCompleto;
    }

    public void setNomeCompleto(String nomeCompleto) {
        this.nomeCompleto = nomeCompleto;
    }

    public String getEnderecoPessoal() {
        return enderecoPessoal;
    }

    public void setEnderecoPessoal(String enderecoPessoal) {
        this.enderecoPessoal = enderecoPessoal;
    }

    @Column(name = "usuario_nome")
    private String nomeCompleto;

    @Column(name = "usuario_endereco")
    private String enderecoPessoal;

    @Column(name = "usuario_data")
    private String dataNascimento;

    @Column(name = "usuario_prifssao")
    private String profissaoPessoal;


    public String getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(String dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public String getProfissaoPessoal() {
        return profissaoPessoal;
    }

    public void setProfissaoPessoal(String profissaoPessoal) {
        this.profissaoPessoal = profissaoPessoal;
    }

    public String getTelofonePessoal() {
        return telofonePessoal;
    }

    public void setTelofonePessoal(String telofonePessoal) {
        this.telofonePessoal = telofonePessoal;
    }

    @Column(name = "usuario_tel")
    private String telofonePessoal;

}
