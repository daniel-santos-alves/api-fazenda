-- CreateTable
CREATE TABLE "tb_culturas" (
    "id_culturas" SERIAL NOT NULL,
    "cultura_plantada" VARCHAR NOT NULL,

    CONSTRAINT "tb_culturas_pkey" PRIMARY KEY ("id_culturas")
);

-- CreateTable
CREATE TABLE "tb_fazenda" (
    "id_fazenda" SERIAL NOT NULL,
    "id_produtor" INTEGER NOT NULL,
    "nome_fazenda" VARCHAR NOT NULL,
    "area_total" DECIMAL(10,2) NOT NULL,
    "area_agricultavel" DECIMAL(10,2) NOT NULL,
    "area_vegetacao" DECIMAL(10,2) NOT NULL,
    "cidade" VARCHAR NOT NULL,
    "estado" VARCHAR NOT NULL,

    CONSTRAINT "fazenda_pkey" PRIMARY KEY ("id_fazenda")
);

-- CreateTable
CREATE TABLE "tb_produtor" (
    "id_produtor" SERIAL NOT NULL,
    "nome_produtor" VARCHAR NOT NULL,
    "cpf_produtor" VARCHAR,
    "cnpj_produtor" VARCHAR,

    CONSTRAINT "tb_produtor_pkey" PRIMARY KEY ("id_produtor")
);

-- CreateTable
CREATE TABLE "tb_safra" (
    "id_safra" SERIAL NOT NULL,
    "id_fazenda" INTEGER NOT NULL,
    "id_culturas" INTEGER NOT NULL,
    "ano" INTEGER NOT NULL,

    CONSTRAINT "tb_safra_pkey" PRIMARY KEY ("id_safra")
);

-- AddForeignKey
ALTER TABLE "tb_fazenda" ADD CONSTRAINT "fk_produtor" FOREIGN KEY ("id_produtor") REFERENCES "tb_produtor"("id_produtor") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_safra" ADD CONSTRAINT "fk_safra_culturas" FOREIGN KEY ("id_culturas") REFERENCES "tb_culturas"("id_culturas") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tb_safra" ADD CONSTRAINT "fk_safra_fazenda" FOREIGN KEY ("id_fazenda") REFERENCES "tb_fazenda"("id_fazenda") ON DELETE NO ACTION ON UPDATE NO ACTION;
